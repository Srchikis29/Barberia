import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Millos from './components/Millos'
import { BrowserRouter } from 'react-router-dom'
import App from './App'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
