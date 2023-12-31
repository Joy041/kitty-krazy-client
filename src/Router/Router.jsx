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
import PrivateRoutes from "../Routes/PrivateRoutes";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";
import Blog from "../Pages/Blog/Blog";

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
          element: <PrivateRoutes><AddToys></AddToys></PrivateRoutes>
        },
        {
          path: 'allToy',
          element: <AllToys></AllToys>,
          loader: () => fetch('https://kitty-krazy-server.vercel.app/totalProductNumber')
        },
        {
          path: 'details/:id',
          element: <PrivateRoutes><Details></Details></PrivateRoutes>,
          loader: ({params}) => fetch(`https://kitty-krazy-server.vercel.app/products/${params.id}`)
        },
        {
          path: 'update/:id',
          element: <UpdateToys></UpdateToys>,
          loader: ({params}) => fetch(`https://kitty-krazy-server.vercel.app/products/${params.id}`)
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: 'myToys',
      element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);
  

  export default router;