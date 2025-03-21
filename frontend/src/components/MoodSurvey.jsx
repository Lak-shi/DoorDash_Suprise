// src/components/MoodSurvey.jsx
import React, { useState } from 'react';

function MoodSurvey({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [preferences, setPreferences] = useState({
    vibe: '',
    craving: '',
    restrictions: []
  });
  
  const vibeOptions = [
    { id: 'comfort', label: 'Comfort Food', emoji: '🫶' },
    { id: 'healthy', label: 'Healthy & Light', emoji: '🥗' },
    { id: 'adventurous', label: 'Adventurous', emoji: '🌶️' },
    { id: 'quick', label: 'Quick Bite', emoji: '⚡' },
    { id: 'celebration', label: 'Celebration', emoji: '🎉' }
  ];
  
  const cravingOptions = [
    { id: 'none', label: 'Nothing specific' },
    { id: 'savory', label: 'Something savory' },
    { id: 'sweet', label: 'Something sweet' },
    { id: 'spicy', label: 'Something spicy' },
    { id: 'fresh', label: 'Something fresh' }
  ];
  
  const restrictionOptions = [
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'vegan', label: 'Vegan' },
    { id: 'gluten-free', label: 'Gluten-free' },
    { id: 'dairy-free', label: 'Dairy-free' },
    { id: 'nut-free', label: 'Nut-free' },
    { id: 'none', label: 'No restrictions' }
  ];
  
  const handleVibeSelect = (vibe) => {
    setPreferences({ ...preferences, vibe });
    setCurrentQuestion(1);
  };
  
  const handleCravingSelect = (craving) => {
    setPreferences({ ...preferences, craving });
    setCurrentQuestion(2);
  };
  
  const handleRestrictionToggle = (restriction) => {
    let updatedRestrictions;
    
    if (restriction === 'none') {
      updatedRestrictions = ['none'];
    } else {
      // Remove 'none' if it exists and we're adding a real restriction
      const withoutNone = preferences.restrictions.filter(r => r !== 'none');
      
      if (withoutNone.includes(restriction)) {
        updatedRestrictions = withoutNone.filter(r => r !== restriction);
      } else {
        updatedRestrictions = [...withoutNone, restriction];
      }
      
      // If no restrictions are selected, default to 'none'
      if (updatedRestrictions.length === 0) {
        updatedRestrictions = ['none'];
      }
    }
    
    setPreferences({ ...preferences, restrictions: updatedRestrictions });
  };
  
  const handleComplete = () => {
    onComplete(preferences);
  };
  
  return (
    <div className="mood-survey">
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${((currentQuestion + 1) / 3) * 100}%` }}
        ></div>
      </div>
      
      {currentQuestion === 0 && (
        <div className="question-container">
          <h2>What's your vibe today?</h2>
          <div className="options-grid">
            {vibeOptions.map((option) => (
              <button
                key={option.id}
                className="option-button"
                onClick={() => handleVibeSelect(option.id)}
              >
                <span className="option-emoji">{option.emoji}</span>
                <span className="option-label">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {currentQuestion === 1 && (
        <div className="question-container">
          <h2>Are you craving something specific?</h2>
          <div className="options-grid">
            {cravingOptions.map((option) => (
              <button
                key={option.id}
                className="option-button"
                onClick={() => handleCravingSelect(option.id)}
              >
                <span className="option-label">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {currentQuestion === 2 && (
        <div className="question-container">
          <h2>Any dietary restrictions today?</h2>
          <div className="options-checkboxes">
            {restrictionOptions.map((option) => (
              <label key={option.id} className="checkbox-option">
                <input
                  type="checkbox"
                  checked={preferences.restrictions.includes(option.id)}
                  onChange={() => handleRestrictionToggle(option.id)}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
          <button 
            className="primary-button"
            onClick={handleComplete}
          >
            Find My Meal!
          </button>
        </div>
      )}
    </div>
  );
}

export default MoodSurvey;