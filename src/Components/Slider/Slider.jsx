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
const Slider = () => {
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
                <div className="relative w-full h-screen bg-center bg-cover" style={{backgroundImage:`url("${image3}")`}}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0  text-white flex justify-center items-center">jfjdfhjdfhj</div>
                   
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