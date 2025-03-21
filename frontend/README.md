# Surprise Me Friday - Frontend

React-based frontend for the Surprise Me Friday feature. This web application provides a user interface for AI-powered meal recommendations on DoorDash.

## Features

- **15-Second Mood Survey**: Simple 3-question survey to understand user preferences
- **Recommendation Display**: Shows AI-selected meal options with match percentage
- **Order Confirmation**: Streamlined checkout process
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Mock Data Fallback**: Functions even without backend connection

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

The application will be available at http://localhost:3000

### Building for Production

```bash
npm run build
```

This creates optimized files in the `build` folder that you can deploy to a web server.

## Project Structure

```
src/
├── components/         # React components
│   ├── App.jsx         # Main application component
│   ├── Header.jsx      # App header component
│   ├── MoodSurvey.jsx  # Survey questions component
│   ├── RecommendationDisplay.jsx  # Shows meal recommendations
│   └── OrderConfirmation.jsx      # Order checkout component
│
├── data/
│   └── mockData.js    # Mock restaurant and meal data
│
├── services/
│   └── api.js         # API service for backend communication
│
├── styles/
│   └── main.css       # CSS styles for the application
│
└── index.js           # Application entry point
```

## Core Components

### App.jsx
The main component that manages application state and screen flow. It handles:
- Current step in the user journey
- User preferences from the survey
- Fetching recommendations
- Transitioning between screens

### MoodSurvey.jsx
Implements the 15-second survey with three key questions:
1. "What's your vibe today?" (Comfort, Healthy, Adventurous, Quick)
2. "Are you craving something specific?" (Savory, Sweet, Spicy, Fresh)
3. "Any dietary restrictions today?" (Vegetarian, Vegan, etc.)

### RecommendationDisplay.jsx
Shows the AI-recommended meals with:
- Primary recommendation with detailed information
- Alternative option
- Match percentage
- Option to shuffle for different recommendations

### OrderConfirmation.jsx
Displays the order summary with:
- Selected meal details
- Pricing breakdown
- Delivery information
- Payment method
- Order confirmation button

## API Integration

The application communicates with the backend API through the `api.js` service:
- `getRecommendations(preferences)`: Fetches meal recommendations based on survey responses
- `checkApiHealth()`: Verifies if the API is available

If the API is unavailable, the application falls back to client-side mock data.

## Styling

The application uses custom CSS for styling with:
- Responsive design principles
- Mobile-first approach
- DoorDash brand colors and style guidelines

## Mock Data

For development and testing, the application includes mock restaurant and dish data in `mockData.js`. This allows for:
- Development without a backend connection
- Consistent demo experience
- Testing different recommendation scenarios

## Browser Compatibility

The application is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Future Enhancements

1. **User Accounts**: Save preferences and order history
2. **Animations**: Add smooth transitions between screens
3. **Dark Mode**: Support light and dark color schemes
4. **Accessibility**: Improve screen reader support and keyboard navigation
5. **Performance Optimization**: Implement code splitting and lazy loading

## License

MIT License