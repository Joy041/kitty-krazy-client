import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import Details from "../Pages/Details/Details";
import MyToys from "../Pages/MyToys/MyToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://kitty-krazy-server.vercel.app/allProducts')
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
          loader: () => fetch('https://kitty-krazy-server.vercel.app/totalProductNumber')
        },
        {
          path: 'details/:id',
          element: <Details></Details>,
          loader: ({params}) => fetch(`https://kitty-krazy-server.vercel.app/products/${params.id}`)
        },
        {
          path: 'myToys',
          element: <MyToys></MyToys>,
          loader: () => fetch('https://kitty-krazy-server.vercel.app/myToys')
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);
  

  export default router;