#!/bin/bash

# Start the backend server
echo "Starting the backend server..."
cd backend
npm install
npm run start &

# Start the frontend server
echo "Starting the frontend server..."
cd ../frontend
npm install
npm run start &

# Wait for both servers to start
wait

echo "Both backend and frontend servers are running."