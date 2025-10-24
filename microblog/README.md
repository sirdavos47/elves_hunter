# Microblog Application

## Overview
Microblog is a social media application designed to allow users to share short messages, known as tweets. It aims to provide a simple and engaging platform for users to connect and communicate.

## Features
- User authentication (login and registration)
- Create, read, and delete tweets
- Responsive frontend built with React
- Backend API built with Node.js and Express
- Unit tests for both backend and frontend components

## Project Structure
The project is organized into several directories:

- **backend**: Contains the server-side code, including controllers, models, routes, and services.
- **frontend**: Contains the client-side code, including components, pages, and hooks.
- **shared**: Contains shared types and utility functions used across both backend and frontend.
- **infra**: Contains infrastructure-related files, including Docker and Kubernetes configurations.
- **scripts**: Contains shell scripts for starting the application and seeding the database.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)
- Docker (for containerization)
- Kubernetes (for deployment)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd microblog
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

To run the application locally, you can use the provided scripts:

1. Start the backend and frontend:
   ```
   cd scripts
   ./start.sh
   ```

### API Endpoints
- **POST /api/tweets**: Create a new tweet
- **GET /api/tweets**: Retrieve all tweets
- **DELETE /api/tweets/:id**: Delete a tweet by ID

### Running Tests
To run the unit tests for the backend:
```
cd backend
npm test
```

To run the unit tests for the frontend:
```
cd frontend
npm test
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.