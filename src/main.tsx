import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/main.scss"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';

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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
