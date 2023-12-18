import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import SGPACalculator from './pages/SgpaCalc/SGPACalculator';
import CGPACalculator from './pages/CgpaCalc/CGPACalculator';
import Utilities from './pages/Utilities';
import Materials from './pages/Materials';
import Terms from './pages/Terms';
import Credits from './pages/Credits'

const router = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/SgpaCalc', element: <SGPACalculator/> },
  { path: '/CgpaCalc', element: <CGPACalculator/> },
  { path: '/Utilities', element: <Utilities/> },
  { path: '/Materials', element: <Materials/> },
  { path: '/Terms', element: <Terms/> },
  { path: '/Credits', element: <Credits/> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
