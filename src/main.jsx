import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import Home from './Components/Home';
import GovtJob from './Components/GovtJob';
import PrivateJob from './Components/PrivateJob';
import ContactUs from './Components/ContactUs';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './Components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/govtJob',
        element: <GovtJob></GovtJob>
      },
      {
        path: '/privateJob',
        element: <PrivateJob></PrivateJob>
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
