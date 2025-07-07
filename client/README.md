# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# WebSocket Client

A React-based WebSocket client application for real-time messaging with room support, built with Vite and Material-UI.

## Features

- **Real-time messaging** with Socket.IO client
- **Room-based chat** functionality
- **Modern UI** with Material-UI components
- **Authentication** via JWT cookies
- **Responsive design** with Material-UI Container and Grid system

## Technologies Used

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **Material-UI (MUI)** - UI component library
- **Socket.IO Client** - WebSocket client library
- **Emotion** - CSS-in-JS styling solution

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Development

1. Start the development server:
```bash
npm run dev
```

2. The client will be running on `http://localhost:5173`

3. Make sure the WebSocket server is running on `http://localhost:3000`

## Features Overview

### Authentication
- Automatic connection to WebSocket server with credentials
- JWT token-based authentication via cookies

### Room Management
- Join specific chat rooms
- Real-time room-based messaging
- Visual feedback for room joining

### Messaging
- Send messages to specific rooms
- Receive real-time messages from other users
- Message history display

## Component Structure

### App.jsx
Main application component containing:
- Socket.IO connection management
- Message state management
- Room joining functionality
- Message sending functionality
- Real-time message receiving

### Key Features:
- **Socket Connection**: Persistent WebSocket connection with credentials
- **Room Joining**: Form to join specific chat rooms
- **Message Sending**: Form to send messages to specific rooms
- **Message Display**: Real-time message list with Material-UI components

## Configuration

The client is configured to connect to the WebSocket server at `http://localhost:3000` with credentials enabled for authentication.

## Build and Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
src/
├── App.jsx          # Main application component
├── main.jsx         # React entry point
└── assets/          # Static assets
```

## Material-UI Components Used

- **Container**: Main layout container
- **Box**: Layout and spacing
- **TextField**: Input fields for messages and room names
- **Button**: Action buttons
- **Typography**: Text display
- **Stack**: Vertical message layout
- **CssBaseline**: CSS reset and baseline styles

## WebSocket Events

### Emitted Events:
- `join-room`: Join a chat room
- `message`: Send message to room

### Listened Events:
- `connect`: Socket connection established
- `receive-message`: New message received
- `welcome`: Welcome message from server

## Development Notes

- StrictMode is disabled to prevent double WebSocket connections in development
- Uses `useMemo` for socket instance to prevent recreation on re-renders
- Cleanup function in useEffect disconnects socket on component unmount

## ESLint Configuration

The project uses ESLint with:
- React hooks rules
- React refresh plugin
- Modern ECMAScript features
- Custom rules for unused variables

## Browser Support

Modern browsers supporting ES6+ features and WebSocket API.
