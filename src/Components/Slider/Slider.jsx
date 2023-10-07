import image1 from "../../assets/gmae1.jpg"
import image2 from "../../assets/gmae2.jpg"
import image3 from "../../assets/game3.jpg"
import image4 from "../../assets/game4.jpg"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
const Slider = () => {
    const [bgImage,setBgImage]=useState(image3)
    const handleClick=(img)=>{

        if(img==="img10"){
            setBgImage(image1)
        }
        else if(img==="img11"){
            setBgImage(image2)
        }else if(img==="img12"){
            setBgImage(image3)
        }else if(img==="img13"){
            setBgImage(image4) 
        }

    }
    return (
        <Swiper
      
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide>
                <div className="relative w-full h-screen bg-center bg-cover" style={{backgroundImage:`url("${bgImage}")`}}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute inset-0  text-white flex justify-between items-center max-w-7xl mx-auto px-5 lg:px-20 ">
                        <div className="">
                            <h1 className="text-4xl font-babas font-bold text-white">The Best <span className="text-primary">Vedio Games</span>  Out There</h1>
                            <p className=" md:w-[400px] text-sm my-3">Gaming is playing an electronic video game, which is often done on a dedicated gaming console, PC or smartphone. People who often play video games are called gamers.</p>
                            <div className="px-4 py-3 bg-secondary inline-block rounded-full cursor-pointer  hover:bg-opacity-80 my-4">
                                <Link to={'/blog'}>
                                <div className="flex items-center gap-5 ">
                                <h1>read more</h1>
                                <FaArrowRightLong></FaArrowRightLong>
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className="md:grid hidden  grid-cols-4 gap-3">
                            <div onClick={()=>handleClick("img10")} className="w-32 h-96  rounded-md overflow-hidden bg-center bg-cover hover:scale-x-150  duration-500 cursor-pointer" style={{backgroundImage:`url("${image1}")`}}></div>
                            <div onClick={()=>handleClick("img11")} className="w-32 h-96  rounded-md overflow-hidden bg-center bg-cover hover:scale-x-150 duration-500 cursor-pointer" style={{backgroundImage:`url("${image2}")`}}></div>
                            <div onClick={()=>handleClick("img12")} className="w-32 h-96  rounded-md overflow-hidden bg-center bg-cover hover:scale-x-150 duration-500 cursor-pointer" style={{backgroundImage:`url("${image3}")`}}></div>
                            <div onClick={()=>handleClick("img13")} className="w-32 h-96  rounded-md overflow-hidden bg-center bg-cover hover:scale-x-150 duration-500 cursor-pointer" style={{backgroundImage:`url("${image4}")`}}></div>
                            
                            
                        </div> 
                   
                </div>
                   
                </div>
            </SwiperSlide>
            <SwiperSlide>
                 <div className="relative w-full h-screen bg-center bg-cover" style={{backgroundImage:`url("${image2}")`}}>
                 <div className="absolute inset-0 bg-black opacity-40"></div>
                   
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-full h-screen bg-center bg-cover" style={{backgroundImage:`url("${image1}")`}}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                   
                </div>
            </SwiperSlide>
            <SwiperSlide>
                    <div className="relative w-full h-screen bg-center bg-cover" style={{backgroundImage:`url("${image4}")`}}>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                   
                   </div>
            </SwiperSlide>
           
        </Swiper>
    );
};

export default Slider;