import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import UseMemoDemo from './pages/usememo/UseMemo';
import UseCallBack from './pages/usememo/UseCallBack';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>React Study</div>,
  },
  {
    path: "/usememo",
    element: <div><UseMemoDemo/></div>,
  },
  {
    path: "/usecallback",
    element: <div><UseCallBack/></div>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
