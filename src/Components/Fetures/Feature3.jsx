import img1 from "../../assets/game-7.jpg"
import img2 from "../../assets/game4.jpg"
import img3 from "../../assets/game6.jpg"
import { AiOutlineStar,AiFillHeart } from "react-icons/ai";
const Feature3 = () => {
    return (
        <>
        <div className="text-center mt-20">
        <button className="text-white px-4 py-1 bg-secondary ">New</button>
        <h1 className="text-3xl font-press mt-5 font-bold">Recent Games</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto px-5 my-10 ">
            <div>
                <div className="relative bg-gray-400 bg-opacity-10 cursor-pointer hover:scale-110 duration-500">
                    <div className="overflow-hidden">
                    <img className="hover:scale-125 duration-500 " src={img1} alt="" />
                    </div>
                    <button className="absolute top-4 left-4 text-white px-4 py-1 bg-secondary ">New</button>
                    <h1 className="text-xl font-semibold my-3 px-2">Susce pulvinar metus nulla, vel facilisis sem</h1>
                    <p className="px-2 py-2">You can have the chance to talk to them directly and learn more about the way they work, their benefits, and their expectations.</p>
                    <h1 className="px-5 py-3">1.3k Comment</h1>
                    <div className="flex justify-end absolute bottom-0 right-0">
                        <AiOutlineStar className="bg-primary text-3xl p-1"></AiOutlineStar>
                        <AiFillHeart className="bg-secondary text-white text-3xl p-1"></AiFillHeart>
                    </div>

                </div>
            </div>
            <div>
                <div className="relative bg-gray-400 bg-opacity-10 cursor-pointer hover:scale-110 duration-500">
                    <div className="overflow-hidden">
                    <img className="hover:scale-125 duration-500 " src={img3} alt="" />
                    </div>
                    <button className="absolute top-4 left-4 text-white px-4 py-1 bg-pink-500 ">RACING</button>
                    <h1 className="text-xl font-semibold my-3 px-2">Susce pulvinar metus nulla, vel facilisis sem</h1>
                    <p className="px-2 py-2">You can have the chance to talk to them directly and learn more about the way they work, their benefits, and their expectations.</p>
                    <h1 className="px-5 py-3">1.3k Comment</h1>
                    <div className="flex justify-end absolute bottom-0 right-0">
                        <AiOutlineStar className="bg-primary text-3xl p-1"></AiOutlineStar>
                        <AiFillHeart className="bg-secondary text-white text-3xl p-1"></AiFillHeart>
                    </div>

                </div>
            </div>
            <div>
                <div className="relative bg-gray-400 bg-opacity-10 cursor-pointer hover:scale-110 duration-500">
                    <div className="overflow-hidden">
                    <img className="hover:scale-125 duration-500 " src={img2} alt="" />
                    </div>
                    <button className="absolute top-4 left-4 text-white px-4 py-1 bg-primary ">ADVENTURE</button>
                    <h1 className="text-xl font-semibold my-3 px-2">Susce pulvinar metus nulla, vel facilisis sem</h1>
                    <p className="px-2 py-2">You can have the chance to talk to them directly and learn more about the way they work, their benefits, and their expectations.</p>
                    <h1 className="px-5 py-3">1.3k Comment</h1>
                    <div className="flex justify-end absolute bottom-0 right-0">
                        <AiOutlineStar className="bg-primary text-3xl p-1"></AiOutlineStar>
                        <AiFillHeart className="bg-secondary text-white text-3xl p-1"></AiFillHeart>
                    </div>

                </div>
            </div>
           
            
        </div>
        </>
    );
};

export default Feature3;