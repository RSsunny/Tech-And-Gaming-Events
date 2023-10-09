import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import bgcover2 from "../../assets/bg3.jpg"
const Feature4 = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            
        });
    },[]);
    return (
        <div className="relative bg-center bg-cover h-[400px] max-w-7xl mx-auto " style={{backgroundImage:`url("${bgcover2}")`}}>
            <div className="absolute inset-0  duration-500 bottom-0  bg-secondary opacity-20 flex justify-center items-center ">
                
            </div>
            <div className="absolute inset-0  text-center flex flex-col items-center justify-center text-white" data-aos ="fade-up" >
            <h1 className="text-5xl font-bold">Gaming <span className="text-primary">Tournaments</span> and <span className="text-primary">Competitions</span></h1>
            <p className=" md:w-[600px] text-sm my-3">Gaming is playing an electronic video game, which is often done on a dedicated gaming console, PC or smartphone. People who often play video games are called gamers.</p>
            <Link className="px-4 py-2 bg-secondary font-bold capitalize my-5 rounded">Join Now</Link>    
            </div>
            
        </div>
    );
};

export default Feature4;