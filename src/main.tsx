import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

declare global {
  interface Window {
    root: HTMLDivElement 
  }
}
createRoot(window.root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
