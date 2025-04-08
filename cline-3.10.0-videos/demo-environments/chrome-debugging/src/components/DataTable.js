import React, { useState } from 'react';

// Intentional UI issue: inefficient table rendering
const DataTable = ({ data }) => {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  
  // Intentional issue: inefficient sorting implementation
  const sortedData = () => {
    if (!sortField) return data;
    
    // Creating a new array on every render
    return [...data].sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (a[sortField] > b[sortField]) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };
  
  // Intentional issue: function recreated on every render
  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Intentional issue: complex calculations in render
  const calculateStats = () => {
    let total = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    
    // Inefficient loop that could be done with reduce
    for (let i = 0; i < data.length; i++) {
      const value = parseFloat(data[i].value);
      total += value;
      if (value > max) max = value;
      if (value < min) min = value;
    }
    
    return {
      total,
      average: total / data.length,
      max,
      min
    };
  };
  
  const stats = calculateStats();
  
  // Intentional issue: missing columns or incorrect column order
  const columns = [
    { field: 'name', label: 'Name' },
    { field: 'value', label: 'Value' },
    // Missing 'trend' column
  ];
  
  return (
    <div>
      <div className="table-stats">
        <p>Total: {stats.total}</p>
        <p>Average: {stats.average.toFixed(2)}</p>
        <p>Max: {stats.max}</p>
        <p>Min: {stats.min}</p>
      </div>
      
      {/* Intentional issue: table with overflow problems */}
      <div className="data-table">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th 
                  key={column.field}
                  onClick={() => handleSort(column.field)}
                  style={{ cursor: 'pointer' }}
                >
                  {column.label}
                  {sortField === column.field && (
                    <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                  )}
                </th>
              ))}
              {/* Intentional issue: action column without header */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Intentional issue: not using memoization for sorted data */}
            {sortedData().map((item, index) => (
              // Intentional issue: using index as key
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.value}</td>
                {/* Intentional issue: missing trend column data */}
                <td>
                  <button 
                    className="primary-button"
                    // Intentional issue: inline event handler
                    onClick={() => console.log('View details for', item.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Intentional issue: pagination not working correctly */}
      <div className="pagination">
        <button disabled={true}>Previous</button>
        <span>Page 1 of 1</span>
        <button disabled={true}>Next</button>
      </div>
    </div>
  );
};

export default DataTable;
