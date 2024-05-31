import React from 'react';


import Services from "../../components/Services/Services";






const Widget = () => {
  const profileStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '40px', // Increased padding for the entire widget
  };

  const leftColumnStyle = {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '30px', // Increased padding
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  const rightColumnStyle = {
    width: '65%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const imageStyle = {
    borderRadius: '50%',
    width: '150px', // Increased image size
    height: '150px', // Increased image size
    marginBottom: '20px', // Increased margin-bottom
  };

  const buttonStyle = {
    padding: '15px 30px', // Increased padding
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1.2rem', // Increased font size
  };

  const gridStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };

  const gridItemStyle = {
    width: '30%',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '30px', // Increased padding
    textAlign: 'center',
    marginBottom: '20px', // Increased margin-bottom
    fontSize: '1.5rem', // Increased font size
    backgroundColor: '#fff',
  };

  const gigStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '30px', // Increased padding
    textAlign: 'center',
    width: '45%',
  };

  return (
    <div style={profileStyle}>
      <div style={leftColumnStyle}>
        <img
          style={imageStyle}
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <h2 style={{ fontSize: '1.8rem' }}>Ayoub E</h2>
        <p style={{ fontSize: '1.2rem' }}>@ayoubelmouden</p>
        <button style={buttonStyle}>Preview Fiverr Profile</button>
        <p style={{ fontSize: '1.2rem' }}>From: Morocco</p>
        <p style={{ fontSize: '1.2rem' }}>Member since: Sept 2022</p>
      </div>
      <div style={rightColumnStyle}>
        <div style={gridStyle}>
          <div style={gridItemStyle}>
            <p>Nbr de service: 2</p>
          </div>
          <div style={gridItemStyle}>
            <p>Nbr de demande : 4</p>
          </div>
          <div style={gridItemStyle}>
            <p>Nbr de commentaire: 3</p>
          </div>
        </div>
        <div style={gridStyle}>
         
        <Services/>

        
          
        </div>
      </div>
    </div>
  );
};

export default Widget;