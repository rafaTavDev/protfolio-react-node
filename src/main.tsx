import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RoutesContextProvider } from './Contexts/RoutesContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoutesContextProvider>
      <App />
    </RoutesContextProvider>
  </React.StrictMode>,
)
