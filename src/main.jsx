import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App><Home /></App> 
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
