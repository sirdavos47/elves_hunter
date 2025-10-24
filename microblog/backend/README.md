# Microblog Backend

## Overview
This is the backend service for the Microblog application, a platform designed to allow users to share short messages, similar to Twitter. The backend is built using Node.js and TypeScript, utilizing Express for handling HTTP requests.

## Features
- User authentication
- Create, read, and delete tweets
- RESTful API endpoints

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)
- TypeScript (installed globally)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd microblog/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Configuration
- Create a `.env` file in the root of the backend directory and set the necessary environment variables (e.g., database connection strings, JWT secret).

### Running the Application
To start the backend server, run:
```
npm start
```
The server will be available at `http://localhost:3000`.

### API Endpoints
- **POST /tweets**: Create a new tweet.
- **GET /tweets**: Retrieve all tweets.
- **DELETE /tweets/:id**: Delete a tweet by ID.

### Running Tests
To run the unit tests, use:
```
npm test
```

## Directory Structure
- `src/`: Contains the source code for the backend application.
  - `controllers/`: Contains the controllers for handling requests.
  - `models/`: Contains the data models.
  - `routes/`: Contains the route definitions.
  - `services/`: Contains service classes for business logic.
- `tests/`: Contains unit tests for the application.
- `package.json`: Configuration file for npm.
- `tsconfig.json`: TypeScript configuration file.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.