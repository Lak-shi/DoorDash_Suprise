import React, { useState } from 'react';
import Header from './Header';
import MoodSurvey from './MoodSurvey';
import RecommendationDisplay from './RecommendationDisplay';
import OrderConfirmation from './OrderConfirmation';
import '../styles/main.css';

function App() {
  const [currentStep, setCurrentStep] = useState('welcome');
  const [userPreferences, setUserPreferences] = useState({
    vibe: '',
    craving: '',
    restrictions: []
  });
  const [recommendations, setRecommendations] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const startSurvey = () => setCurrentStep('survey');

  const handleSurveyComplete = (preferences) => {
    setUserPreferences(preferences);
    setCurrentStep('loading');
    setTimeout(() => {
      fetchRecommendations(preferences);
    }, 1500);
  };

  const fetchRecommendations = async (preferences) => {
    try {
      const response = await fetch('http://localhost:8000/api/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preferences),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      setRecommendations(data.recommendations);
      setCurrentStep('recommendation');
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      import('../data/mockData').then((mockData) => {
        setRecommendations(mockData.getMockRecommendations(preferences));
        setCurrentStep('recommendation');
      });
    }
  };

  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal);
    setCurrentStep('confirmation');
  };

  const handleShuffle = () => {
    setCurrentStep('loading');
    setTimeout(() => {
      import('../data/mockData').then((mockData) => {
        setRecommendations(mockData.getMockRecommendations(userPreferences, true));
        setCurrentStep('recommendation');
      });
    }, 1000);
  };

  const handleConfirmOrder = () => {
    alert('Order placed successfully! Your food will arrive soon.');
    resetApp();
  };

  const resetApp = () => {
    setCurrentStep('welcome');
    setUserPreferences({ vibe: '', craving: '', restrictions: [] });
    setRecommendations(null);
    setSelectedMeal(null);
  };

  return (
    <div className="app-container">
      {/* ✅ Pass resetApp function & visibility logic to Header */}
      <Header showReset={currentStep !== 'welcome' && currentStep !== 'confirmation'} onReset={resetApp} />


      {currentStep === 'welcome' && (
        <div className="welcome-screen">
          <h1>Surprise Me Friday!</h1>
          <p>Tired of decision fatigue? Let our AI choose the perfect meal for you!</p>
          <button className="primary-button" onClick={startSurvey}>
            Get Started (15-Second Survey)
          </button>
        </div>
      )}

      {currentStep === 'survey' && <MoodSurvey onComplete={handleSurveyComplete} />}
      
      {currentStep === 'loading' && (
        <div className="loading-screen">
          <div className="spinner"></div>
          <p>Finding your perfect meal...</p>
        </div>
      )}

      {currentStep === 'recommendation' && (
        <RecommendationDisplay 
          recommendations={recommendations}
          onSelectMeal={handleSelectMeal}
          onShuffle={handleShuffle}
        />
      )}

      {currentStep === 'confirmation' && (
        <OrderConfirmation 
          meal={selectedMeal}
          onConfirm={handleConfirmOrder}
          onCancel={() => setCurrentStep('recommendation')}
        />
      )}
    </div>
  );
}

export default App;
