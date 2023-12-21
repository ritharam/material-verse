import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import SGPACalculator from './pages/SGPACalculator';
import CGPACalculator from './pages/CGPACalculator';
import Materials from './pages/Materials';
import Terms from './pages/Terms';
import Credits from './pages/Credits'
import Placements from './pages/Placements';
import Sem12 from './pages/Sem12';
import ClassSkip from './pages/ClassSkip';
import MaterialForm from './pages/MaterialForm';
import Feedback from './pages/Feedback';
import ExpExt from './pages/ExpExt';
import ReqSgpa from './pages/ReqSgpa';
import Sem3 from './pages/Sem3';
import Sem4 from './pages/Sem4';
import Sem5 from './pages/Sem5';
import Sem6 from './pages/Sem6';
import Sem7 from './pages/Sem7';

const router = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/SgpaCalc', element: <SGPACalculator/> },
  { path: '/CgpaCalc', element: <CGPACalculator/> },
  { path: '/Materials', element: <Materials/> },
  { path: '/Terms', element: <Terms/> },
  { path: '/Credits', element: <Credits/> },
  { path: '/Placements', element: <Placements/> },
  { path: '/Sem12', element: <Sem12/> },
  { path: '/ClassSkip', element: <ClassSkip/> },
  { path: '/MaterialForm', element: <MaterialForm/> },
  { path: '/Feedback', element: <Feedback/> },
  { path: '/ExpExt', element: <ExpExt/> },
  { path: '/ReqSgpa', element: <ReqSgpa/> },
  { path: '/Sem3', element: <Sem3/> },
  { path: '/Sem4', element: <Sem4/> },
  { path: '/Sem5', element: <Sem5/> },
  { path: '/Sem6', element: <Sem6/> },
  { path: '/Sem7', element: <Sem7/> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
