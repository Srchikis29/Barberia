import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Millos from './components/Millos'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Millos />
  </StrictMode>,
)
