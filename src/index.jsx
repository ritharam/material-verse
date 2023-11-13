import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import SGPACalculator from './pages/SgpaCalc/SGPACalculator';
import Utilities from './pages/Utilities';

const router = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/SgpaCalc', element: <SGPACalculator/> },
  { path: '/Utilities', element: <Utilities/> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
