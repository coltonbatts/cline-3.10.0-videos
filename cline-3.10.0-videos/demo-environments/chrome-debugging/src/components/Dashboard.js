import React, { useState, useEffect } from 'react';
import { fetchDashboardData, updateDashboardItem } from '../api';

// Intentional UI issue: component with excessive re-renders
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Intentional issue: state that changes on every render
  const [timestamp, setTimestamp] = useState(new Date());
  
  // Intentional issue: missing dependency array in useEffect
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const dashboardData = await fetchDashboardData();
        setData(dashboardData);
        setError(null);
      } catch (err) {
        setError('Failed to load dashboard data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
    
    // Intentional issue: updating state in useEffect without cleanup
    const interval = setInterval(() => {
      setTimestamp(new Date());
    }, 1000);
    
    // Missing cleanup function to clear interval
  });
  
  // Intentional issue: function recreated on every render
  const handleRefresh = async () => {
    try {
      setLoading(true);
      const dashboardData = await fetchDashboardData();
      setData(dashboardData);
      setError(null);
    } catch (err) {
      setError('Failed to refresh dashboard data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  // Intentional issue: inefficient list rendering without keys
  const renderItems = () => {
    return data.map((item) => (
      // Missing key prop
      <div className="dashboard-card">
        <h3>{item.name}</h3>
        <p className="value">{item.value}</p>
        <p className="trend">{item.trend}</p>
        <button 
          className="primary-button"
          onClick={() => updateItem(item.id)}
        >
          Update
        </button>
      </div>
    ));
  };
  
  // Intentional issue: function that causes unnecessary re-renders
  const updateItem = (itemId) => {
    // Direct state mutation
    const newData = data;
    const itemIndex = newData.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      newData[itemIndex].value += 1;
      setData(newData); // Setting state with the same reference
      
      // API call with potential error
      updateDashboardItem(itemId, newData[itemIndex]);
    }
  };
  
  // Intentional issue: complex inline styles
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };
  
  return (
    <div className="container">
      {/* Intentional issue: inline styles instead of CSS classes */}
      <div style={headerStyle}>
        <h1>Dashboard</h1>
        <div>
          <span>Last updated: {timestamp.toLocaleTimeString()}</span>
          <button 
            className="primary-button" 
            onClick={handleRefresh}
            style={{ marginLeft: '10px' }}
          >
            Refresh
          </button>
        </div>
      </div>
      
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      
      {/* Intentional issue: missing responsive layout */}
      <div className="dashboard">
        {!loading && !error && renderItems()}
      </div>
      
      {/* Intentional issue: animation performance problem */}
      <div className="animated-element"></div>
    </div>
  );
};

export default Dashboard;
