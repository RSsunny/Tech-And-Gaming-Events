import { useLoaderData } from "react-router-dom";
import image81 from "../../assets/gmae2.jpg"
import GameCard from "./GameCard";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
const Games = () => {
    const games=useLoaderData()

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    
    return (
       <>
       <div className="bg-cover bg-center w-full h-[400px]" style={{backgroundImage:`url("${image81}")`}}></div>

       <h1 className="text-4xl font-bold font-babas text-center my-10">Resent Online Event</h1>
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 max-w-7xl mx-auto ">
        {
            games.map((game,index)=><GameCard key={index} card={game}></GameCard>)
                
        }

       </div>

       <div className="mt-20">
        <Footer></Footer>
       </div>
       
       </>
    );
};

export default Games;