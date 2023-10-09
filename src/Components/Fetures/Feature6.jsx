import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import man1 from "../../assets/man1.jpg"
import man2 from "../../assets/man2.jpg"
import man3 from "../../assets/man3.jpg"
import man4 from "../../assets/man4.jpg"
import girl1 from "../../assets/girl1.jpg"
import girl2 from "../../assets/girl2.jpg"
import girl3 from "../../assets/girl3.jpg"
import girl4 from "../../assets/girl4.jpg"
const Feature6 = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={6}
                navigation
                pagination={{ clickable: true }}
                
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                    <div className='px-5 py-10 text-center w-40 bg-secondary bg-opacity-20 mb-20 hover:scale-x-125 mx-5 duration-500 rounded-md'>
                        <div className='h-20 w-20 my-5 mx-auto'>
                            <img className='h-full w-full rounded-full' src={girl1} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-babas text-center pt-5'>Olivia</h1>
                            <h1 className='text-xs'>Graphic Designer</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-5 py-10 text-center w-40 bg-secondary bg-opacity-20 mb-20 hover:scale-x-125 mx-5 duration-500 rounded-md'>
                        <div className='h-20 w-20 my-5 mx-auto'>
                            <img className='h-full w-full rounded-full' src={man1} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-babas text-center pt-5'>Alexander</h1>
                            <h1 className='text-xs'>Software Engineer</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-5 py-10 text-center w-40 bg-secondary bg-opacity-20 mb-20 hover:scale-x-125 mx-5 duration-500 rounded-md'>
                        <div className='h-20 w-20 my-5 mx-auto'>
                            <img className='h-full w-full rounded-full' src={girl2} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-babas text-center pt-5'>Sophia</h1>
                            <h1 className='text-xs'>Lawyer</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-5 py-10 text-center w-40 bg-secondary bg-opacity-20 mb-20 hover:scale-x-125 mx-5 duration-500 rounded-md'>
                        <div className='h-20 w-20 my-5 mx-auto'>
                            <img className='h-full w-full rounded-full' src={man2} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-babas text-center pt-5'>Liam</h1>
                            <h1 className='text-xs'>Architectr</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-5 py-10 text-center w-40 bg-secondary bg-opacity-20 mb-20 hover:scale-x-125 mx-5 duration-500 rounded-md'>
                        <div className='h-20 w-20 my-5 mx-auto'>
                            <img className='h-full w-full rounded-full' src={girl3} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-babas text-center pt-5'>Ava</h1>
                            <h1 className='text-xs'> Biologist</h1>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className='px-5 py-10 text-center w-40 bg-secondary bg-opacity-20 mb-20 hover:scale-x-125 mx-5 duration-500 rounded-md'>
                        <div className='h-20 w-20 my-5 mx-auto'>
                            <img className='h-full w-full rounded-full' src={man3} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-babas text-center pt-5'>Benjamin</h1>
                            <h1 className='text-xs'> Software Engineer</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-5 py-10 text-center w-40 bg-secondary bg-opacity-20 mb-20 hover:scale-x-125 mx-5 duration-500 rounded-md'>
                        <div className='h-20 w-20 my-5 mx-auto'>
                            <img className='h-full w-full rounded-full' src={girl4} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-babas text-center pt-5'>Isabella </h1>
                            <h1 className='text-xs'> Journalist</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-5 py-10 text-center w-40 bg-secondary bg-opacity-20 mb-20 hover:scale-x-125 mx-5 duration-500 rounded-md'>
                        <div className='h-20 w-20 my-5 mx-auto'>
                            <img className='h-full w-full rounded-full' src={man4} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-babas text-center pt-5'>Alexander </h1>
                            <h1 className='text-xs'> Architect</h1>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Feature6;