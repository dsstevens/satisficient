import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import './index.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App>{ Home }</App> 
//   },
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
// strict mode will help with state as components mount and unmount
// source: https://refine.dev/blog/react-strict-mode-in-react-18/