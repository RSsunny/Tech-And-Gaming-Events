import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorElement from "../Pages/Error/ErrorElement";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Log/Login/Login";
import Register from "../Pages/Log/Register/Register";
import Profile from "../Components/Profile/Profile";
import Service from "../Pages/Service/Service";
import Games from "../Pages/Games/Games";
import Event from "../Pages/Events/Event";
import Privetroute from "../Privet-Route/Privetroute";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                loader:()=>fetch('/services.json'),
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
                element:<Games></Games>,
                loader:()=>fetch('/games.json')
            },
            {
                path:'/services',
                element:<Service></Service>
            },
            {
                path:'/event/:id',
                element:<Privetroute><Event></Event></Privetroute>,
                loader:()=>fetch('/services.json')
            },
            {
                path:'/blog',
                element:<Privetroute><Blog></Blog></Privetroute>,
                loader:()=>fetch('/blog.json')
            },
            {
                path:'/contact',
                element:<Contact></Contact>,
                loader:()=>fetch('/contact.json')
            }
            
        ]
    }
])

export default Router;