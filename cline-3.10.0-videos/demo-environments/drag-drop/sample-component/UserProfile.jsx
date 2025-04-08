import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/UserProfile.css';
import { fetchUserData, updateUserProfile } from '../api/userService';

/**
 * UserProfile component displays and allows editing of a user's profile information.
 * This component has several issues that could be improved:
 * - Mixing controlled and uncontrolled inputs
 * - Inefficient state management
 * - Poor error handling
 * - Lack of loading states
 * - Inconsistent prop validation
 */
const UserProfile = ({ userId, onUpdate, showAvatar = true }) => {
  // State management
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  
  // Fetch user data on component mount
  useEffect(() => {
    // No cleanup function
    fetchUserData(userId)
      .then(data => {
        setUser(data);
        setName(data.name);
        setEmail(data.email);
        setBio(data.bio || '');
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching user data:', err);
        setError('Failed to load user data');
        setLoading(false);
      });
  }, [userId]);
  
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // No validation before submission
    const updatedUser = {
      ...user,
      name,
      email,
      bio
    };
    
    // No loading state during update
    updateUserProfile(userId, updatedUser)
      .then(response => {
        setUser(response);
        setIsEditing(false);
        // Callback with no error handling
        onUpdate(response);
      })
      .catch(err => {
        console.error('Error updating profile:', err);
        setError('Failed to update profile');
      });
  };
  
  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
    
    // Reset form when canceling edit
    if (isEditing) {
      setName(user.name);
      setEmail(user.email);
      setBio(user.bio || '');
    }
  };
  
  // Render loading state
  if (loading) {
    return <div className="user-profile-loading">Loading...</div>;
  }
  
  // Render error state
  if (error) {
    return <div className="user-profile-error">{error}</div>;
  }
  
  // Render user profile
  return (
    <div className="user-profile">
      {showAvatar && (
        <div className="user-profile-avatar">
          <img src={user.avatarUrl || 'default-avatar.png'} alt={`${name}'s avatar`} />
        </div>
      )}
      
      <div className="user-profile-content">
        {isEditing ? (
          <form onSubmit={handleSubmit} className="user-profile-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
              />
            </div>
            
            <div className="user-profile-actions">
              <button type="submit" className="btn-primary">Save</button>
              <button type="button" className="btn-secondary" onClick={toggleEdit}>Cancel</button>
            </div>
          </form>
        ) : (
          <div className="user-profile-info">
            <h2 className="user-profile-name">{name}</h2>
            <p className="user-profile-email">{email}</p>
            {bio && <p className="user-profile-bio">{bio}</p>}
            
            <div className="user-profile-actions">
              <button className="btn-primary" onClick={toggleEdit}>Edit Profile</button>
            </div>
          </div>
        )}
      </div>
      
      {/* Additional user information - could be extracted to a separate component */}
      <div className="user-profile-stats">
        <div className="stat">
          <span className="stat-value">{user.posts}</span>
          <span className="stat-label">Posts</span>
        </div>
        <div className="stat">
          <span className="stat-value">{user.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat">
          <span className="stat-value">{user.following}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>
    </div>
  );
};

// Prop validation
UserProfile.propTypes = {
  userId: PropTypes.string.isRequired,
  onUpdate: PropTypes.func,
  showAvatar: PropTypes.bool
};

// Default props
UserProfile.defaultProps = {
  onUpdate: () => {},
  showAvatar: true
};

export default UserProfile;
