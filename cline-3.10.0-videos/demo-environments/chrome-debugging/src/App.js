import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import DataTable from './components/DataTable';
import { fetchDashboardData, fetchExternalData } from './api';

// Intentional issue: mock data that will cause errors
const MOCK_DATA = [
  { id: 1, name: 'Revenue', value: '12500', trend: 'up' },
  { id: 2, name: 'Users', value: '8700', trend: 'up' },
  { id: 3, name: 'Conversion', value: '2.4', trend: 'down' },
  { id: 4, name: 'Bounce Rate', value: '42.1', trend: 'up' },
  // Intentional issue: missing trend property
  { id: 5, name: 'Session Duration', value: '3.5' },
];

function App() {
  const [dashboardData, setDashboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Intentional issue: useEffect with race condition
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Intentional issue: not using Promise.all for parallel requests
        const dashboardResult = await fetchDashboardData();
        
        // This will fail due to CORS
        const externalResult = await fetchExternalData();
        
        // Intentional issue: not checking if data exists
        setDashboardData(dashboardResult.length > 0 ? dashboardResult : MOCK_DATA);
        setError(null);
      } catch (err) {
        console.error('Failed to load data:', err);
        setError('Failed to load data. Using mock data instead.');
        setDashboardData(MOCK_DATA);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);
  
  // Intentional issue: event handler with potential error
  const handleTabChange = (tab) => {
    // Intentional error: accessing property of undefined
    if (tab.toLowerCase() === activeTab) {
      return;
    }
    setActiveTab(tab);
  };
  
  // Intentional issue: complex conditional rendering
  const renderContent = () => {
    if (loading) {
      return <div className="loading">Loading...</div>;
    }
    
    if (error) {
      return (
        <div className="error">
          <p>{error}</p>
          {dashboardData.length > 0 && (
            <div>
              {activeTab === 'dashboard' ? (
                <Dashboard data={dashboardData} />
              ) : (
                <DataTable data={dashboardData} />
              )}
            </div>
          )}
        </div>
      );
    }
    
    return (
      <div>
        {activeTab === 'dashboard' ? (
          <Dashboard data={dashboardData} />
        ) : (
          <DataTable data={dashboardData} />
        )}
      </div>
    );
  };
  
  return (
    <div className="app">
      <header className="header">
        <h1>Cline Debugging Demo</h1>
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleTabChange('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`tab ${activeTab === 'data' ? 'active' : ''}`}
            onClick={() => handleTabChange('data')}
          >
            Data Table
          </button>
          {/* Intentional issue: dropdown with z-index problem */}
          <div className="dropdown">
            <button className="dropdown-toggle">Settings</button>
            <div className="dropdown-menu">
              <a href="#">Profile</a>
              <a href="#">Preferences</a>
              <a href="#">Logout</a>
            </div>
          </div>
        </div>
      </header>
      
      <main className="content">
        {/* Intentional issue: not using React.memo or shouldComponentUpdate */}
        {renderContent()}
      </main>
      
      <footer>
        <p>Cline Debugging Demo &copy; 2025</p>
        {/* Intentional issue: responsive element with conflicting styles */}
        <div className="responsive-element">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Help</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
