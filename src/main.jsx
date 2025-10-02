import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Stairs from './common/Stairs.jsx'
import NavContext from './context/NavContext.jsx'
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Stairs>
     <NavContext>
      <App />
     </NavContext>
    </Stairs>
    </BrowserRouter>
  </React.StrictMode>,
)
