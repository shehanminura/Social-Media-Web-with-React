import {RouterProvider,createBrowserRouter} from 'react-router-dom'

import Login from '../page/login/Login';
import Signup from '../page/signup/Signup'; // Correct import

export default function Layout() {
  const router = createBrowserRouter([
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
  ])
  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}
