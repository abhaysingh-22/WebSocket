# WebSocket Server

A Node.js WebSocket server built with Express, Socket.IO, and JWT authentication for real-time messaging with room support.

## Features

- **Real-time messaging** with Socket.IO
- **JWT authentication** for secure connections
- **Room-based messaging** for group chats
- **CORS support** for cross-origin requests
- **Cookie-based authentication**

## Technologies Used

- **Express.js** - Web framework
- **Socket.IO** - Real-time bidirectional communication
- **JWT** - JSON Web Tokens for authentication
- **Cookie-parser** - Parse cookies from requests
- **CORS** - Cross-origin resource sharing

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

## Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## Environment Setup

The server runs on port 3000 by default and expects the client to be running on `http://localhost:5173`.

## API Endpoints

### GET /
- **Description**: Health check endpoint
- **Response**: "Hello World!"

### GET /login
- **Description**: Login endpoint that generates JWT token
- **Response**: Sets httpOnly cookie with JWT token
- **Cookie**: `token` (httpOnly, secure, sameSite: none)

## WebSocket Events

### Client to Server Events

- **`join-room`**: Join a specific room
  - Data: `room` (string)
  
- **`message`**: Send message to a room
  - Data: `{ room: string, message: string }`

### Server to Client Events

- **`receive-message`**: Receive message from room
  - Data: `message` (string)

## Authentication

The server uses JWT tokens stored in httpOnly cookies for authentication. All WebSocket connections are authenticated using the middleware that verifies the JWT token.

## Usage

1. Start the server:
```bash
npm run dev
```

2. The server will be running on `http://localhost:3000`

3. Visit `http://localhost:3000/login` to get authentication cookie

4. Connect your WebSocket client to start real-time messaging

## Security Features

- JWT token validation for all WebSocket connections
- HttpOnly cookies prevent XSS attacks
- CORS configuration for secure cross-origin requests
- Secure cookie settings for production use

## Development

The server uses nodemon for development, which automatically restarts the server when files change.

```bash
npm run dev
```

## Production

For production deployment:

```bash
npm start
```

Make sure to:
- Set secure environment variables for JWT secret
- Configure proper CORS origins
- Use HTTPS in production
- Set appropriate cookie security settings
