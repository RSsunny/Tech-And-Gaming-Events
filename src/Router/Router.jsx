import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorElement from "../Pages/Error/ErrorElement";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Log/Login/Login";
import Register from "../Pages/Log/Register/Register";
import Profile from "../Components/Profile/Profile";
import Service from "../Pages/Service/Service";
import Games from "../Pages/Games/Games";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/games',
                element:<Games></Games>
            },
            {
                path:'/services',
                element:<Service></Service>
            },
            
        ]
    }
])

export default Router;