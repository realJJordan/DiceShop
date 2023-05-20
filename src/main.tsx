import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/main.scss"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CategoriesBar from './components/CategoriesBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
    <CategoriesBar />
    <div className='pageRenderer'>
      <RouterProvider router={router} />
    </div>
    <Footer />
  </React.StrictMode>,
)
