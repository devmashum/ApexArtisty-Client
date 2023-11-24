import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProviders from './Provider/AuthProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <React.StrictMode>
      <AuthProviders> <RouterProvider router={router} /></AuthProviders>
    </React.StrictMode>
  </div>
)
