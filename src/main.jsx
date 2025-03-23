import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App"
import './Index.css'//tenia mal el nombre
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
