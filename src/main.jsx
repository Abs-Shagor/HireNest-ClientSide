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
import Login from './Components/Login';
import Signup from './Components/Signup';
import AuthProvider from './Providers/AuthProvider';
import SignupVerificationPage from './Components/SignupVerificationPage';
import Profile from './Components/Profile';
import PrivateRoute1 from './Components/PrivateRoute/PrivateRoute1';
import HomeUserPost from './Components/HomeUserPost';
import JobSection from './Components/JobSection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/privateJob',
        element: <JobSection></JobSection>
      },
      {
        path: '/govtJob',
        element: <JobSection></JobSection>
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
        element: <PrivateRoute1> <PostJob></PostJob> </PrivateRoute1>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/signupVerificationPage',
        element: <SignupVerificationPage></SignupVerificationPage>
      },
      {
        path: '/profile',
        element: <PrivateRoute1> <Profile></Profile> </PrivateRoute1>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={router}></RouterProvider>
      </DataProvider>
    </AuthProvider>
    <ToastContainer />
  </StrictMode>,
)
