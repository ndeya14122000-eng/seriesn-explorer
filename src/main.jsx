import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavorisProvider } from './context/FavorisContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavorisProvider>
      <App />
    </FavorisProvider>
  </StrictMode>,
)

