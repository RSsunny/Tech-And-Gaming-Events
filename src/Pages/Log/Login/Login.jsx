import bgLogin from "../../../assets/gmae2.jpg"
import  "./Login.css"
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GiBoltEye,GiBeastEye } from "react-icons/gi";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
const Login = () => {
    const [show,setShow]=useState(false)
    const handleLogin=e=>{
        const form=new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')
        console.log(email,password)
    }
    return (
        <div className=" w-full h-screen flex justify-center items-center bg-center bg-cover" style={{backgroundImage:`url("${bgLogin}")`}} >
            <div className="input-container relative w-[300px] md:w-[400px] h-[400px] md:h-[550px] bg-[#040717] rounded-tl-[50px] rounded-tr-[5px] rounded-br-[50px] rounded-bl-[5px] flex justify-center items-center overflow-hidden mt-[80px]">
                <div className=" z-10 absolute bg-[#0c1022] rounded-tl-[50px] rounded-tr-[5px] rounded-br-[50px] rounded-bl-[5px] text-primary inset-1 flex justify-center items-center">
                    <form onSubmit={handleLogin}>
                        <h1 className="text-xl md:text-4xl font-bold font-robato text-center">Login</h1>
                        <div className=" relative flex justify-center items-center mt-3 md:mt-10 mb-5 
                        ">

                            <input className="outline-none w-[250px] md:w-[300px] border-b-[1px] border-b-primary pr-6 bg-transparent py-2 text-primary" autoComplete="off" type="email" name="email" id="01" placeholder="inter your email"/>
                            <MdOutlineMarkEmailRead className="absolute right-0 top-3"></MdOutlineMarkEmailRead>

                        </div>
                        <div className=" relative flex justify-center items-center md:mt-10 md:mb-5 
                        ">

                            <input className="outline-none w-full border-b-[1px] border-b-primary pr-6 bg-transparent py-2 text-primary" autoComplete="off" type={show?"text":"password"} name="password" id="02" placeholder="inter your password"/>
                            <div onClick={()=>setShow(!show)} className="absolute right-0 top-3">
                                {
                                    show?<GiBeastEye ></GiBeastEye>:<GiBoltEye></GiBoltEye>
                                }
                            </div>

                        </div>
                        <h1 className="text-xs mt-1">Forget Password ?</h1>
                        <input className="w-full border py-1 md:py-3 rounded-full mt-5 border-primary " type="submit" value="Login" />

                        <div className="flex justify-center items-center mt-5 gap-5">
                            <div className="w-20 border border-primary"></div>
                            <div>or</div>
                            <div className="w-20 border border-primary"></div>
                        </div>

                        <div className="flex justify-center items-center mt-5 gap-5 text-xl">
                                <BsFacebook  className="hover:scale-125 cursor-pointer duration-200"></BsFacebook>
                                <FcGoogle className="hover:scale-125 cursor-pointer duration-200"></FcGoogle>
                                <FaGithub className="hover:scale-125 cursor-pointer duration-200"></FaGithub>
                        </div>
                        <h1 className="mt-3 md:mt-5 text-xs md:text-base">You have an account? <Link to={'/register'} className="text-red-500 font-bold">Register</Link></h1>
                    </form>

                </div>

            </div>
            
        </div>
    );
};

export default Login;