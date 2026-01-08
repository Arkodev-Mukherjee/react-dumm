import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
const basePath = window.location.pathname.replace(/\/$/, ''); // strips trailing slash

createRoot(document.getElementById('root')).render(

  <BrowserRouter basename={process.env.VITE_BASE_PATH}>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
)
