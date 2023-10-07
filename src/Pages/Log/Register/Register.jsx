import bgregister from "../../../assets/gmae2.jpg"
import  "./Register.css"
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GiBoltEye,GiBeastEye } from "react-icons/gi";
import { useState } from "react";

import { Link } from "react-router-dom";
const Register = () => {
    const [show,setShow]=useState(false)
    const handleLogin=e=>{
        const form=new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')
        console.log(email,password)
    }
    return (
        <div className=" w-full h-screen flex justify-center items-center bg-center bg-cover" style={{backgroundImage:`url("${bgregister}")`}} >
            <div className="input-container relative w-[300px] md:w-[400px] h-[400px] md:h-[550px] bg-[#040717] rounded-tl-[50px] rounded-tr-[5px] rounded-br-[50px] rounded-bl-[5px] flex justify-center items-center overflow-hidden mt-[80px]">
                <div className=" z-10 absolute bg-[#0c1022] rounded-tl-[50px] rounded-tr-[5px] rounded-br-[50px] rounded-bl-[5px] text-primary inset-1 flex justify-center items-center">
                    <form onSubmit={handleLogin}>
                        <h1 className="text-xl md:text-4xl font-bold font-robato text-center md:mb-5 ">Register</h1>
                        <input className="outline-none w-[250px] md:w-[300px] border-b-[1px] border-b-primary md:pr-6 bg-transparent py-1 text-primary" placeholder="your name" type="text" name="name" id="05" />
                        <div className=" relative flex justify-center items-center mt-5 md:mt-10 mb-5 
                        ">

                            <input className="outline-none w-[250px] md:w-[300px] border-b-[1px] border-b-primary md:pr-6 bg-transparent py-2 text-primary" autoComplete="off" type="email" name="email" id="01" placeholder="inter your email"/>
                            <MdOutlineMarkEmailRead className="absolute right-0 top-3"></MdOutlineMarkEmailRead>

                        </div>
                        <div className=" relative flex justify-center items-center md:mt-10 mb-5 
                        ">

                            <input className="outline-none w-full border-b-[1px] border-b-primary md:pr-6 bg-transparent py-2 text-primary" autoComplete="off" type={show?"text":"password"} name="password" id="02" placeholder=" password"/>
                            <div onClick={()=>setShow(!show)} className="absolute right-0 top-3">
                                {
                                    show?<GiBeastEye ></GiBeastEye>:<GiBoltEye></GiBoltEye>
                                }
                            </div>

                        </div>
                        <div className=" relative flex justify-center items-center md:mt-10  mb-5 
                        ">

                            <input className="outline-none w-full border-b-[1px] border-b-primary md:pr-6 bg-transparent py-2 text-primary" autoComplete="off" type={show?"text":"password"} name="password" id="07" placeholder="confrim password"/>
                        </div>
                        
                        <input className="w-full border py-1 md:py-3 rounded-full md:mt-5 border-primary font-bold" type="submit" value="Register" />
                        <h1 className="md:mt-5 mt-2 text-xs md:text-base">You have an account? <Link to={'/login'} className="text-green-500 font-bold">Login</Link></h1>
                        
                    </form>

                </div>

            </div>
            
        </div>
    );
};

export default Register;