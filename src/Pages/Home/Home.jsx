
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Fetures from "../../Components/Fetures/Fetures";
import Footer from "../../Components/Footer/Footer";


const Home = () => {
    const events=useLoaderData()
    
    return (
        <>
           <Banner></Banner>
           <Fetures events={events}></Fetures>
           <Footer></Footer>
        </>
    );
};

export default Home;