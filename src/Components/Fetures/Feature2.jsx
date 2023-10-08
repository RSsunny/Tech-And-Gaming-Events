import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import image23 from "../../assets/bg2.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
const Feature2 = () => {
    useEffect(()=>{
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out-cubic',
                once: true,
                mirror: false,
                delay: 100,
                offset: 0,
            });
    
    },[])
    return (
        <div className="max-w-7xl mx-auto px-5 py-20">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-20">
            <div className="flex-1 h-[300px]  " data-aos ="fade-right" data-aos-mirror="true" data-aos-delay="100">
                <img className="h-full w-full " src={image23} alt="" />
            </div>
            <div className="flex-1" data-aos ="fade-right" data-aos-mirror="true" data-aos-delay="100">
                <h1 className="text-xl md:text-4xl font-press text-primary">Tech Conferences and Expo</h1>
                <p className="my-5 text-tertiary">You can have the chance to talk to them directly and learn more about the way they work, their benefits, and their expectations</p>
                <div className="px-4 py-3 bg-secondary inline-block rounded-full cursor-pointer  hover:bg-opacity-80 my-4">
                <Link to={'/blog'}>
                <div className="flex items-center gap-5 ">
                <h1>read more</h1>
                <FaArrowRightLong></FaArrowRightLong>
                </div>
                </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Feature2;