import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {
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
        <div className="flex justify-between items-center font-semibold font-babas max-w-7xl mx-auto p-5">
            <div className="flex items-center gap-3 ">
                <img className="w-20" src={logo} alt="" />
                <h1 className="font-babas text-4xl "><span className="text-primary">Game</span> On <span className="text-primary">Glaxy</span></h1>
            </div>
            <ul className="flex gap-5 text-xl font-semibold ">
                {
                    navList
                }
            </ul>
            <div >
                <div className="flex gap-3 border px-5 py-2 rounded-full bg-primary">
                    <Link to={'/login'}>Login </Link>
                    <Link to={'/register'}> Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;