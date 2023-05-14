import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
{
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/menu",
            element: <PrivateRoute><Menu></Menu></PrivateRoute>
        },
        {
            path: "/about",
            element: <About></About>
        },
    ]
},
{
    path: '/login',
    element: <Login></Login>
},
{
    path: '/signup',
    element: <Signup></Signup>
},
])