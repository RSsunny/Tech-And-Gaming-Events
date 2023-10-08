import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import useAuth from "../../Hooks/useAuth";
import { BiSolidUser } from "react-icons/bi";

const Navbar = () => {
    const {user}=useAuth()
    
    const navList=<>
        <li>
            <NavLink
             to="/"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b border-primary text-primary" : ""
            }
            >
            Home
            </NavLink>
        </li>
        <li>
            <NavLink
             to="/games"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b border-primary text-primary" : ""
            }
            >
            Games
            </NavLink>
        </li>
        <li>
            <NavLink
             to="/services"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b border-primary text-primary" : ""
            }
            >
            Services
            </NavLink>
        </li>
        <li>
            <NavLink
             to="/blog"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b border-primary text-primary" : ""
            }
            >
            Blog
            </NavLink>
        </li>
        <li>
            <NavLink
             to="/contact"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b border-primary text-primary" : ""
            }
            >
            Contect
            </NavLink>
        </li>
</>
    return ( 
         <div className="flex  justify-center">
            <div className="flex flex-col md:flex-row justify-between items-center font-semibold font-robato max-w-7xl absolute w-full  p-5 z-40  mx-auto text-white gap-5 md:gap-0">
            <div className="flex items-center gap-1 lg:gap-3  ">
                <div className="flex items-center gap-1 lg:gap-3">
                <img className="w-20" src={logo} alt="" />
                <h1 className="font-babas text-xl md:text-2xl lg:text-4xl "><span className="text-primary">Game</span> On <span className="text-primary">Glaxy</span></h1>
                </div>
                {
                user? <label tabIndex={0} className="btn btn-ghost btn-circle avatar  md:hidden ml-10">
                   <div className="w-12 rounded-full">
                     <Link to={'/profile'}>{user.photoURL?<img src={user.photoURL} />:<BiSolidUser className="text-4xl text-primary"></BiSolidUser>}</Link>
                   </div>
                </label>:
                <div className=" md:hidden border px-5 py-2 rounded-full text-primary shadow-md ml-5">
                    <Link to={'/login'}>Login </Link>  
                </div>
                }
            </div>
            <ul className="flex gap-2 lg:gap-5 md:text-xl font-semibold ">
                {
                    navList
                }
            </ul>
            <div >
                {
                   user?
                   <label tabIndex={0} className="btn btn-ghost btn-circle avatar hidden md:block">
                   <div className="w-full rounded-full">
                     <Link to={'/profile'}>{user.photoURL?<img src={user.photoURL} />:<BiSolidUser className="text-5xl text-primary"></BiSolidUser>}</Link>
                   </div>
                    </label>
                   :
                    <div className="hidden md:flex gap-3 border px-5 py-2 rounded-full text-primary shadow-md bg-black bg-opacity-30">
                    <Link to={'/login'}>Login </Link>
                    <Link to={'/register'}> Register</Link>
                    </div>
                }
                
            </div>
        </div>
        </div>
      
    );
};

export default Navbar;