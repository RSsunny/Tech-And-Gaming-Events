import { Link} from "react-router-dom"
import bg51 from "../../assets/bg1.jpg"
import bg52 from "../../assets/bg2.jpg"
import bg53 from "../../assets/bg3.jpg"
import bg54 from "../../assets/bg4.jpg"
import bg55 from "../../assets/bg5.jpg"
import bg56 from "../../assets/bg6.jpg"
import bg57 from "../../assets/bg7.jpg"
import bg58 from "../../assets/bg8.jpg"

const Feature7 = () => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto px-2 gap-5 py-5">
            <div className="border bg-black bg-opacity-10  rounded-md ">
                <div className="h-[200px] rounded-md">
                    <img className="h-full w-full rounded-t-md" src={bg53} alt="" />
                </div>
                <div className="p-2 pb-5">
                    <h1 className="text-xl font-babas font-medium my-3">Wild West Duels: Card Outlaws</h1>
                    <p className="mb-5 text-xs">Join the epic showdown! Compete against players worldwide in our grand tournament for glory and fantastic prizes!</p>
                    <Link to={'/blog'}  className="text-xs px-4 py-2  rounded-full bg-primary text-white hover:bg-secondary duration-300">Show details</Link>
                </div>
            </div>
            <div className="border bg-black bg-opacity-10  rounded-md ">
                <div className="h-[200px] rounded-md">
                    <img className="h-full w-full rounded-t-md" src={bg51} alt="" />
                </div>
                <div className="p-2 pb-5">
                    <h1 className="text-xl font-babas font-medium my-3">Wild West Duels: Card Outlaws</h1>
                    <p className="mb-5 text-xs">Embark on a treasure hunt adventure. Solve puzzles, overcome obstacles, and claim the ultimate treasure chest hidden deep within.</p>
                    <Link to={'/blog'} className="text-xs px-4 py-2  rounded-full bg-primary text-white hover:bg-secondary duration-300">Show details</Link>
                </div>
            </div>
            <div className="border bg-black bg-opacity-10  rounded-md ">
                <div className="h-[200px] rounded-md">
                    <img className="h-full w-full rounded-t-md" src={bg52} alt="" />
                </div>
                <div className="p-2 pb-5">
                    <h1 className="text-xl font-babas font-medium my-3">Cybernetic Showdown: Card Revolution</h1>
                    <p className="mb-5 text-xs">Test your survival skills in a harsh post-apocalyptic world. Outlast the competition, gather resources, and be the last one standing.</p>
                    <Link to={'/blog'} className="text-xs px-4 py-2  rounded-full bg-primary text-white hover:bg-secondary duration-300">Show details</Link>
                </div>
            </div>
            <div className="border bg-black bg-opacity-10  rounded-md ">
                <div className="h-[200px] rounded-md">
                    <img className="h-full w-full rounded-t-md" src={bg54} alt="" />
                </div>
                <div className="p-2 pb-5">
                    <h1 className="text-xl font-babas font-medium my-3">Heroic Quests: Card Odyssey</h1>
                    <p className="mb-5 text-xs">Embark on a legendary quest. Explore mythical realms, battle fearsome creatures, and uncover the secrets of ancient legends.</p>
                    <Link to={'/blog'} className="text-xs px-4 py-2  rounded-full bg-primary text-white hover:bg-secondary duration-300">Show details</Link>
                </div>
            </div>
            <div className="border bg-black bg-opacity-10  rounded-md ">
                <div className="h-[200px] rounded-md">
                    <img className="h-full w-full rounded-t-md" src={bg55} alt="" />
                </div>
                <div className="p-2 pb-5">
                    <h1 className="text-xl font-babas font-medium my-3">Mystic Realms: Card Chronicles.</h1>
                    <p className="mb-5 text-xs">Become a detective and solve perplexing mysteries. Gather clues, interrogate suspects, and unravel the truth in thrilling investigations.</p>
                    <Link to={'/blog'} className="text-xs px-4 py-2  rounded-full bg-primary text-white hover:bg-secondary duration-300">Show details</Link>
                </div>
            </div>
            <div className="border bg-black bg-opacity-10  rounded-md ">
                <div className="h-[200px] rounded-md">
                    <img className="h-full w-full rounded-t-md" src={bg56} alt="" />
                </div>
                <div className="p-2 pb-5">
                    <h1 className="text-xl font-babas font-medium my-3">Elemental Conquest: The Card Duel</h1>
                    <p className="mb-5 text-xs">Rev your engines and compete in the ultimate racing championship. Speed through challenging tracks, upgrade your vehicles, and claim victory!</p>
                    <Link to={'/blog'} className="text-xs px-4 py-2  rounded-full bg-primary text-white hover:bg-secondary duration-300">Show details</Link>
                </div>
            </div>
            <div className="border bg-black bg-opacity-10  rounded-md ">
                <div className="h-[200px] rounded-md">
                    <img className="h-full w-full rounded-t-md" src={bg58} alt="" />
                </div>
                <div className="p-2 pb-5">
                    <h1 className="text-xl font-babas font-medium my-3">Galactic Empires: Card Clash</h1>
                    <p className="mb-5 text-xs">Embark on a treasure hunt adventure. Solve puzzles, overcome obstacles, and claim the ultimate treasure chest hidden deep within.</p>
                    <Link to={'/blog'} className="text-xs px-4 py-2  rounded-full bg-primary text-white hover:bg-secondary duration-300">Show details</Link>
                </div>
            </div>
            <div className="border bg-black bg-opacity-10  rounded-md ">
                <div className="h-[200px] rounded-md">
                    <img className="h-full w-full rounded-t-md" src={bg57} alt="" />
                </div>
                <div className="p-2 pb-5">
                    <h1 className="text-xl font-babas font-medium my-3">Galactic Empires: Card Clash</h1>
                    <p className="mb-5 text-xs">Embark on a legendary quest. Explore mythical realms, battle fearsome creatures, and uncover the secrets of ancient legends.</p>
                    <Link to={'/blog'} className="text-xs px-4 py-2  rounded-full bg-primary text-white hover:bg-secondary duration-300">Show details</Link>
                </div>
            </div>
           
            
        </div>
    );
};

export default Feature7;