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
import DataProvider from './Providers/DataProvider';
import BookDetails from './Components/BookDetails';
import Books from './Components/Books';
import AllJob from './Components/AllJob';
import PostJob from './Components/PostJob';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            index: true,
            element: <AllJob></AllJob>
          },
          {
            path: '/govtJob',
            element: <GovtJob></GovtJob>
          },
          {
            path: '/privateJob',
            element: <PrivateJob></PrivateJob>
          },
        ]
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/bookDetails/:bookId',
        element: <BookDetails></BookDetails>,
      },
      {
        path: '/books',
        element: <Books></Books>
      },
      {
        path: '/post',
        element: <PostJob></PostJob>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router}></RouterProvider>
    </DataProvider>
    <ToastContainer />
  </StrictMode>,
)
