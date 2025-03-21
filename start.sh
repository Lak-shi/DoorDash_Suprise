#!/bin/bash

# Start the backend
echo "Starting backend server..."
cd backend
python app.py &
BACKEND_PID=$!
cd ..

# Start the frontend
echo "Starting frontend development server..."
cd frontend
npm start &
FRONTEND_PID=$!
cd ..

# Function to handle graceful shutdown
function cleanup {
  echo "Shutting down servers..."
  kill $FRONTEND_PID
  kill $BACKEND_PID
  exit
}

# Trap Ctrl+C and call cleanup
trap cleanup INT

# Wait for user to hit Ctrl+C
echo "✅ Surprise Me Friday is running!"
echo "  - Frontend: http://localhost:3000"
echo "  - Backend API: http://localhost:8000"
echo "  - API Documentation: http://localhost:8000/docs"
echo ""
echo "Press Ctrl+C to stop both servers"

# Keep script running
wait