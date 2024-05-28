import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';

const SearchBar = ({ filter, setFilter }) => {
  const searchBarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '0 auto',
    flexWrap: 'wrap',
  };

  const inputStyle = {
    flex: '1',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginRight: '10px',
    minWidth: '200px',
    marginBottom: '10px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'var(--blue)',
    color: 'white',
    cursor: 'pointer',
    marginBottom: '10px',
  };

  const iconStyle = {
    marginRight: '10px',
    marginBottom: '10px',
  };

  return (
    <div style={searchBarStyle}>
      <HiLocationMarker style={iconStyle} color="var(--blue)" size={25} />
      <input
        style={inputStyle}
        placeholder="Recherche par titre/ville/pays"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button style={buttonStyle} className="button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
