import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { FaCheckSquare } from "react-icons/fa";
import { useEffect } from "react";

const Event = () => {
    const events=useLoaderData()
    const id=useParams()
    const matchCard=events?.find(event => event.id==id.id)
    const {image ,event_name,place,date,rules,price,description,team_member    }=matchCard
    console.log(matchCard);
    const sortdiscrip=description.slice(0,100)

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
    return (
        <>
        <div className="bg-cover bg-center w-full h-screen md:h-[600px] flex justify-center" style={{backgroundImage:`url("${image}")`}}>
            <div className="flex flex-col justify-center items-center text-center mt-20">
                <h1 className="text-white font-babas text-2xl font-bold  md:text-5xl my-3  mx-5">{event_name}</h1>
                <p className="text-white md:font-bold md:text-xl md:w-[500px] lg:w-[600px] mx-auto">{sortdiscrip}</p>
                <p className="text-xl font-bold text-secondary my-5">{date}</p>
                
            </div>
        </div>
        <h1 className="text-center my-10 text-5xl font-bold">Feature</h1>
        <div className="max-w-7xl mx-auto px-2 my-10">
            <div className="flex gap-10 items-center flex-col lg:flex-row">
                <div className="flex-1 md:pl-5 px-2 md:px-0 font-bold space-y-5">
                    <h1 ><span >Event Name :</span> {event_name}</h1>
                    <h2><span >Team Member :</span> {team_member}</h2>
                    <h2><span >Date :</span> {date}</h2>
                    <h3> <span >Game Type :</span> {place}</h3>
                    <h4><span >Price:</span> {price}</h4>
                    <p >Our Rules :</p>
                    {
                        rules.map((rule,index)=>(
                            <p key={index} className="md:ml-10 ">
                               <FaCheckSquare className="inline-block mr-2"></FaCheckSquare> {index+1} {rule}
                                </p>
                        ))
                    }
                    <p className="pt-10">Description : <span className=" font-semibold ">{description}</span> </p>
                </div>
                <div className="md:w-[400px] w-full  ">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
        <div>
            <h1 className="text-center text-3xl font-babas font-bold py-10">Join This Events</h1>
            <div>
                <form className="md:w-[800px] mx-auto mb-10 bg-gray-300 p-5 md:p-20">
                    <h1 className="text-xl font-bold">Name :</h1>
                    <input className="w-full p-4 my-2 outline-none" type="text" name="name" id="11" />
                    <h1 className="text-xl font-bold">Email :</h1>
                    <input className="w-full p-4 my-2 outline-none" type="email" name="email" id="12" />
                    <h1 className="text-xl font-bold">Address :</h1>
                    <input className="w-full p-4 my-2 outline-none" type="text" name="address" id="13" />
                    <h1 className="text-xl font-bold">Phone :</h1>
                    <input className="w-full p-4 my-2 outline-none" type="number" name="number" id="14" />
                    <div className="text-center mt-10">
                    <button className="px-6 py-2 bg-primary ">submit</button>
                    </div>

                </form>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Event;