import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dahboard from './components/Dahboard';
import PrivateRoute from './components/Route/PrivateRoute';
import AuthProvider from './Provider/AuthProvider';
import Error from './components/Error/Error';
import Orders from './components/Orders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/dashboard",
        element: <PrivateRoute><Dahboard/></PrivateRoute>
      },
      {
        path:"/orders",
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path:"*",
        element:<Error/>
      }
    ]
  },
]); 

createRoot(document.getElementById('root')).render(

 
  <StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
