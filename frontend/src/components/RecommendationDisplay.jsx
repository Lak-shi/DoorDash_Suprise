import React from 'react';

function RecommendationDisplay({ recommendations, onSelectMeal, onShuffle }) {
  if (!recommendations || recommendations.length === 0) {
    return (
      <div className="recommendation-container">
        <h2>No recommendations found</h2>
        <p>Please try again with different preferences.</p>
      </div>
    );
  }

  const primaryRecommendation = recommendations[0];
  const alternativeRecommendation = recommendations.length > 1 ? recommendations[1] : null;

  return (
    <div className="recommendation-container">
      <h2>Your AI-Recommended Meal</h2>
      <p className="recommendation-intro">Based on your mood and preferences, we think you'll love:</p>

      <div className="recommendation-primary">
        <div className="recommendation-card">
          {/* ✅ Correctly placed Match % Badge */}
          {primaryRecommendation.matchPercentage && (
            <div className="match-badge">
              {primaryRecommendation.matchPercentage}% Match
            </div>
          )}
          <div className="recommendation-details">
            <h3>{primaryRecommendation.name}</h3>
            <p className="restaurant-name">{primaryRecommendation.restaurant}</p>
            <div className="recommendation-meta">
              <span className="cuisine-tag">{primaryRecommendation.cuisine}</span>
              <span className="price-tag">{primaryRecommendation.price}</span>
              <span className="rating">★ {primaryRecommendation.rating}</span>
              <span className="delivery-time">{primaryRecommendation.deliveryTime} min</span>
            </div>
            <p className="recommendation-description">{primaryRecommendation.description}</p>
            <div className="recommendation-tags">
              {primaryRecommendation.tags && primaryRecommendation.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <button 
              className="primary-button" 
              onClick={() => onSelectMeal(primaryRecommendation)}
            >
              Select This Meal
            </button>
          </div>
        </div>
      </div>

      {alternativeRecommendation && (
        <div className="recommendation-alternative">
          <h3>Alternative Option</h3>
          <div className="alternative-card">
            <div className="alternative-details">
              <h4>{alternativeRecommendation.name}</h4>
              <p className="restaurant-name">{alternativeRecommendation.restaurant}</p>
              <button 
                className="secondary-button" 
                onClick={() => onSelectMeal(alternativeRecommendation)}
              >
                Select Instead
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="shuffle-container">
        <button className="text-button" onClick={onShuffle}>
          Not quite right? Shuffle for new recommendations
          <span className="shuffle-icon">🔄</span>
        </button>
      </div>
    </div>
  );
}

export default RecommendationDisplay;
