// src/components/OrderConfirmation.jsx
import React from 'react';

function OrderConfirmation({ meal, onConfirm, onCancel }) {
  if (!meal) {
    return (
      <div className="confirmation-container">
        <h2>Error: No meal selected</h2>
        <button className="secondary-button" onClick={onCancel}>
          Go Back
        </button>
      </div>
    );
  }
  
  // Calculate estimated delivery time
  const now = new Date();
  const deliveryMinutes = meal.deliveryTime || 30;
  const deliveryTime = new Date(now.getTime() + deliveryMinutes * 60000);
  const deliveryTimeString = deliveryTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <div className="confirmation-container">
      <h2>Confirm Your Order</h2>
      
      <div className="confirmation-card">
        <div className="confirmation-header">
          <div className="confirmation-title">
            <h3>{meal.name}</h3>
            <p className="restaurant-name">{meal.restaurant}</p>
          </div>
        </div>
        
        <div className="confirmation-details">
          <div className="detail-row">
            <span className="detail-label">Delivery Estimate</span>
            <span className="detail-value">{deliveryTimeString}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Subtotal</span>
            <span className="detail-value">${meal.price?.replace('$', '') || '12.99'}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Delivery Fee</span>
            <span className="detail-value">$3.99</span>
          </div>
          <div className="detail-row total">
            <span className="detail-label">Total</span>
            <span className="detail-value">${(parseFloat(meal.price?.replace('$', '') || '12.99') + 3.99).toFixed(2)}</span>
          </div>
        </div>
        
        <div className="address-section">
          <h4>Delivery Address</h4>
          <p>123 Main Street, Apt 4B<br />New York, NY 10001</p>
          <button className="text-button">Change</button>
        </div>
        
        <div className="payment-section">
          <h4>Payment Method</h4>
          <div className="payment-method">
            <span className="card-icon">💳</span>
            <span>•••• 4242</span>
          </div>
          <button className="text-button">Change</button>
        </div>
        
        <div className="confirmation-actions">
          <button className="primary-button" onClick={onConfirm}>
            Place Order
          </button>
          <button className="secondary-button" onClick={onCancel}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;