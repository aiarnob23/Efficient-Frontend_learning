import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import UseMemoDemo from './pages/usememo/UseMemo';
import UsecallBack from './pages/usecallback/UseCallBack';
import HookForm from './pages/form/HookFrom';
import UseEffectExample from './pages/useEffect/UseEffect';
import InfiniteScrollingDemo from './pages/infinite-scrolling/InfiniteScrolling';
import ModalTesting from './pages/model-testing/ModalTesting';
import Animation from './pages/animation/Animation';
import Scroll1 from './pages/scroll/Scroll1';
import GsapSvg from './pages/gsap-svg/GsapSvg';


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
    element: <div><UsecallBack/></div>,
  },
  {
    path: "/form",
    element: <div><HookForm/></div>,
  },
  {
    path: "/useeffect",
    element: <div><UseEffectExample/></div>,
  },
  {
    path: "/infinite-scrolling",
    element: <div><InfiniteScrollingDemo/></div>,
  },
  {
    path: "/modal-testing",
    element: <div><ModalTesting/></div>,
  },
  {
    path: "/animation",
    element: <div><Animation/></div>,
  },
  {
    path: "/scroll1",
    element: <div><Scroll1/></div>,
  },
  {
    path: "/gsap-svg",
    element: <div><GsapSvg/></div>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
