import useAuth from "../../Hooks/useAuth";
import Navbar from "../Navbar/Navbar";
import bgprofile from "../../assets/game4.jpg"
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate=useNavigate()
    const {user}=useAuth()||{}
    const {signout}=useAuth()
        const handleLogout=()=>{
            signout()
            .then()
            .catch()
            navigate('/login')

    }
    return (
        <div className="relative w-full h-[800px] md:h-screen bg-center bg-cover" style={{backgroundImage:`url("${bgprofile}")`}}>
            <Navbar></Navbar>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className=" mt-80 ">

                <div className="flex flex-col md:flex-row gap-10 inset-0 absolute items-center max-w-7xl mx-auto px-5 mt-52 md:mt-0">
                    <div className="relative  md:h-[450px] bg-gray-400 bg-opacity-20 p-5 text-white space-y-2 rounded-xl w-full md:w-60">
                        <img className="rounded-full mx-auto" src={user?.photoURL} alt="" />
                        <h1 className="text-xl font-babas  text-center">{user?.displayName}</h1>
                        <p className="text-sm text-center">{user?.email}</p>
                    <div className=" md:absolute bottom-4 w-full mx-auto text-center ">
                        <button onClick={handleLogout} className=" p-2 bg-t rounded  mx-auto text-center px-5 w-32 md:mr-8 bg-secondary">logout</button>
                    </div>
                    </div>
                    <div className="md:flex-1 md:h-[450px] bg-gray-400 bg-opacity-20 p-5 text-white space-y-2 rounded-xl w-full">
                        <h1 className="text-3xl font-babas text-secondary">My Profile</h1>
                    </div>
                </div>
            
            </div>
            
        </div>
    );
};

export default Profile;