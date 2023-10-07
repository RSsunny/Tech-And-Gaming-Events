import { Link } from "react-router-dom";
import image21 from "../../assets/game-5.jpg"
import { FaArrowRightLong } from "react-icons/fa6";

const Feature2 = () => {
    return (
        <div className="max-w-7xl mx-auto px-5">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-20">
            <div className="flex-1 h-[500px] ">
                <img className="h-full w-full " src={image21} alt="" />
            </div>
            <div className="flex-1">
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