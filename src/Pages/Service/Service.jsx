import { useLoaderData } from "react-router-dom";
import bgservices from "../../assets/bg3.jpg"
import ServicesCard from "./ServicesCard";
import Footer from "../../Components/Footer/Footer";

const Service = () => {
    const servicesinfo=useLoaderData()
    
    return (
        <>
         <div className="bg-cover bg-center w-full h-[400px]" style={{backgroundImage:`url("${bgservices}")`}}></div>
         <h1 className="text-5xl font-bold my-10 text-center font-babas">service</h1>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto px-2">
            {
                servicesinfo?.map((data,i)=><ServicesCard key={i} scard={data}></ServicesCard>)
            }
         </div>
         <div className="mt-20">
            <Footer></Footer>
         </div>
        </>
    );
};

export default Service;