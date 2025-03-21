import React from 'react';

const SimpleSurpriseMe = () => {
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center' 
    }}>
      <h1 style={{ color: '#ff3008' }}>Surprise Me Friday!</h1>
      <p style={{ marginBottom: '20px' }}>Tired of decision fatigue? Let our AI choose the perfect meal for you!</p>
      <button style={{
        backgroundColor: '#ff3008',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '8px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Get Started (15-Second Survey)
      </button>
    </div>
  );
};

export default SimpleSurpriseMe;