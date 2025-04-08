import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserProfile from '../UserProfile';
import { fetchUserData, updateUserProfile } from '../../api/userService';

// Mock the API service
jest.mock('../../api/userService');

/**
 * This test file contains several issues that could be improved:
 * - Incomplete test coverage
 * - Inconsistent mocking
 * - Redundant test code
 * - Poor error handling testing
 * - Missing edge case tests
 */

describe('UserProfile Component', () => {
  const mockUser = {
    id: '123',
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Software developer with 5 years of experience',
    avatarUrl: 'https://example.com/avatar.jpg',
    posts: 42,
    followers: 156,
    following: 98
  };

  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    
    // Mock successful API responses
    fetchUserData.mockResolvedValue(mockUser);
    updateUserProfile.mockResolvedValue({
      ...mockUser,
      name: 'Updated Name',
      bio: 'Updated bio'
    });
  });

  test('renders loading state initially', () => {
    render(<UserProfile userId="123" />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders user profile after loading', async () => {
    render(<UserProfile userId="123" />);
    
    // Wait for the user data to load
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
    
    // Check if user information is displayed
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Software developer with 5 years of experience')).toBeInTheDocument();
    
    // Check if stats are displayed
    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByText('156')).toBeInTheDocument();
    expect(screen.getByText('98')).toBeInTheDocument();
  });

  test('toggles edit mode when edit button is clicked', async () => {
    render(<UserProfile userId="123" />);
    
    // Wait for the user data to load
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
    
    // Click the edit button
    fireEvent.click(screen.getByText('Edit Profile'));
    
    // Check if form inputs are displayed
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Bio')).toBeInTheDocument();
    
    // Check if form inputs have the correct values
    expect(screen.getByLabelText('Name')).toHaveValue('John Doe');
    expect(screen.getByLabelText('Email')).toHaveValue('john@example.com');
    expect(screen.getByLabelText('Bio')).toHaveValue('Software developer with 5 years of experience');
  });

  test('updates user profile when form is submitted', async () => {
    const onUpdateMock = jest.fn();
    render(<UserProfile userId="123" onUpdate={onUpdateMock} />);
    
    // Wait for the user data to load
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
    
    // Click the edit button
    fireEvent.click(screen.getByText('Edit Profile'));
    
    // Update form inputs
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Updated Name' }
    });
    
    fireEvent.change(screen.getByLabelText('Bio'), {
      target: { value: 'Updated bio' }
    });
    
    // Submit the form
    fireEvent.click(screen.getByText('Save'));
    
    // Check if updateUserProfile was called with the correct arguments
    expect(updateUserProfile).toHaveBeenCalledWith('123', {
      ...mockUser,
      name: 'Updated Name',
      bio: 'Updated bio'
    });
    
    // Wait for the update to complete
    await waitFor(() => {
      expect(onUpdateMock).toHaveBeenCalled();
    });
    
    // Check if the component displays the updated information
    expect(screen.getByText('Updated Name')).toBeInTheDocument();
    expect(screen.getByText('Updated bio')).toBeInTheDocument();
  });

  // Missing tests:
  // - Error handling when fetchUserData fails
  // - Error handling when updateUserProfile fails
  // - Testing the showAvatar prop
  // - Testing form validation
  // - Testing the cancel button in edit mode
});
