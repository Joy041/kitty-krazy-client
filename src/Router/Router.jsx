import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'addToy',
          element: <AddToys></AddToys>
        },
        {
          path: 'allToy',
          element: <AllToys></AllToys>,
          loader: () => fetch('https://kitty-krazy-server.vercel.app/products')
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);
  

  export default router;