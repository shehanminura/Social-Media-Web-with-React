import {Outlet, RouterProvider,createBrowserRouter} from 'react-router-dom'

import Login from '../page/login/Login';
import Signup from '../page/signup/Signup'; // Correct import
import Home from '../page/home/Home';
import Profile from '../page/profile/Profile';
import ChatBox from '../page/Chatbox/ChatBox';

export default function Layout() {

//feed................

const Feed =()=>{
  return(
    <>
    <main>
      <div className="contaner">
        <Outlet />
      </div>
    </main>

    </>
  )
}


// Router..........................

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Feed/> ,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/profile/:id',
          element:<Profile/>
        },
        {
          path:'/chatbox/:id',
          element:<ChatBox/>
        },
      ]
    },
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
