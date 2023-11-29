import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProviders from './Provider/AuthProviders.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-gray-100'>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProviders >
          <RouterProvider router={router} /></AuthProviders>
      </QueryClientProvider>
    </React.StrictMode>
  </div>
)
