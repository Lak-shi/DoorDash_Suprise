# Surprise Me Friday

An AI-powered meal recommendation feature for DoorDash that helps users overcome decision fatigue when ordering food.

## Overview

Every week, people spend up to **2 hours** deciding what to eat, especially on weekends, when they should be relaxing. The overwhelming number of food choices on DoorDash leads to choice paralysis, resulting in indecision or ordering the same meals repeatedly.

**Surprise Me Friday** solves this problem with a 15-second mood survey that leverages AI to provide personalized meal recommendations based on the user's current mood, cravings, and dietary restrictions.

## Features

- **15-Second Mood Survey**: Quick questions to understand user preferences
- **AI-Powered Recommendations**: Personalized meal suggestions based on mood and preferences
- **One-Click Ordering**: Streamlined process to reduce decision fatigue
- **Smart Learning**: Recommendations improve over time based on user feedback

## Tech Stack

### Frontend
- React (Web)
- CSS for styling

### Backend
- FastAPI
- Python for recommendation algorithms

### Data
- Mock restaurant and dish data (JSON)
- Simulated user preferences

## Project Structure

```
surprise-me-friday/
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── MoodSurvey.jsx
│   │   │   ├── RecommendationDisplay.jsx
│   │   │   └── OrderConfirmation.jsx
│   │   │
│   │   ├── data/
│   │   │   └── mockData.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── styles/
│   │   │   └── main.css
│   │   │
│   │   └── index.js
│   │
│   ├── package.json
│   └── README.md
│
├── backend/
│   ├── app.py
│   ├── mock_data.json
│   ├── requirements.txt
│   └── README.md
│
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js and npm
- Python 3.8+

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the FastAPI server:
   ```
   python app.py
   ```

## API Documentation

### GET /api/health
Health check endpoint

### POST /api/recommendations
Get meal recommendations based on user preferences

**Request Body:**
```json
{
  "vibe": "comfort",
  "craving": "savory",
  "restrictions": ["vegetarian"]
}
```

**Response:**
```json
{
  "recommendations": [
    {
      "id": 502,
      "name": "Margherita Pizza",
      "price": "$14.99",
      "description": "Classic pizza with fresh mozzarella, tomato sauce, and basil on a thin, crispy crust.",
      "restaurant": "Pizza Palace",
      "cuisine": "Italian",
      "rating": 4.5,
      "deliveryTime": 30,
      "matchPercentage": 92,
      "matchReasons": ["Matches your comfort food mood", "Satisfies your savory craving"]
    },
    {
      "id": 202,
      "name": "Mediterranean Wrap",
      "price": "$12.99",
      "description": "Hummus, falafel, cucumber, tomato, and tzatziki wrapped in a whole wheat tortilla.",
      "restaurant": "Green Garden",
      "cuisine": "Vegetarian",
      "rating": 4.8,
      "deliveryTime": 30,
      "matchPercentage": 87,
      "matchReasons": ["Satisfies your savory craving"]
    }
  ]
}
```

## Future Enhancements

1. **User Authentication**: Implement user accounts and preferences storage
2. **Machine Learning Model**: Train a more sophisticated recommendation model
3. **User Feedback Loop**: Improve recommendations based on user selections and ratings
4. **Mobile Versions**: Develop iOS (Swift) and Android (Kotlin) versions
5. **Integration with DoorDash API**: Connect to real restaurant data