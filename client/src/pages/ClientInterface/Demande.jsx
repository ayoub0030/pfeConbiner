import React from 'react';
import ClientdachLayout from "./ClientdachLayout";
import Footer from "../../components/Footer/Footer";

export default function Widget() {
  const headerContainerStyle = {
    width: "100%",
    height: "65vh", // 65% of the viewport height
    overflow: "hidden",
    position: "relative",
  };

  const headerImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: "0",
    left: "0",
  };

  const textContainerInImageStyle = {
    ...styles.textContainer,
    position: "absolute",
    top: "60%",
    left: "5%", // Adjust this value to position it from the left edge
    transform: "translateY(-50%)", // Only translate vertically
    backgroundColor: "rgba(255, 255, 244, 0.7)", // Semi-transparent background
    width: "40%", // Adjust width as needed
    padding: "1rem", // Add padding for more space around the text
    marginLeft: "1rem", // Additional margin for left spacing
  };

  return (
    <div style={styles.container}>
      <ClientdachLayout />
      <div style={headerContainerStyle}>
        <img 
          src="https://plus.unsplash.com/premium_photo-1682148175448-8e418fcfbaa7?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header" 
          style={headerImageStyle} 
        />
        <div style={textContainerInImageStyle}>
          <p style={styles.text}>Bienvenue sur votre page de gestion des demandes. Ici, vous pouvez suivre vos demandes de service en temps réel. Veuillez noter qu'une fois une demande soumise, elle ne peut pas être modifiée. Pour toute assistance, contactez notre équipe de support.</p>
        </div> 
      </div> 
      <main style={styles.main}>
        <h1 style={styles.title}>Mes Demandes</h1>
    
        <div style={styles.filterContainer}>
          <button style={styles.filterButton}>Filter</button>
          <span style={styles.statusBadge}>en attend</span>
        </div>
    
        <div style={styles.table}>
          <div style={styles.tableRow}>
            <div style={styles.tableCell}>Service</div>
            <div style={styles.tableCell}>Description</div>
            <div style={styles.tableCell}>Prof</div>
            <div style={styles.tableCell}>Date</div>
            <div style={styles.tableCell}>Status</div>
            <div style={styles.tableCell}>X</div>
          </div>
          <div style={styles.tableRow}>
            <div style={styles.tableCell}>Service</div>
            <div style={styles.tableCell}>Description</div>
            <div style={styles.tableCell}>Prof</div>
            <div style={styles.tableCell}>Date</div>
            <div style={styles.tableCell}>Status</div>
            <div style={styles.tableCell}>X</div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: 'white',
    color: '#333',
  },
  main: {
    padding: '2rem',
  },
  title: {
    fontSize: '2rem',
    color: '#f39c12',
    marginBottom: '1rem',
  },
  filterContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },
  filterButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s',
    width:"140px",
  },
  statusBadge: {
    backgroundColor: '#add8e6',
    color: '#00008b',
    padding: '0.2rem 0.5rem',
    borderRadius: '5px',
  },
  textContainer: {
    marginBottom: '1rem',
    padding: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #333',
    backgroundColor: '#f0f0f0',
    width: '70%', // Make it half the width
  },
  text: {
    margin: 0,
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '0.5rem',
    padding: '0.5rem',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    marginBottom: '0.5rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Added shadow
  },
  tableCell: {
    padding: '0.5rem',
    textAlign: 'center',
  },
};
