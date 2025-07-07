import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {CssBaseline} from '@mui/material'

createRoot(document.getElementById('root')).render(
  <>
    <CssBaseline />
    <App />
  </>,
  // here we have removed strict mode because it was causing issues with socket.io connection in development mode it shows two connection at a time (one for development and one for production) 
)
