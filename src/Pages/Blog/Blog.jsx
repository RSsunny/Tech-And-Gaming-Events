import { useLoaderData } from "react-router-dom";
import bgblog from "../../assets/bg2.jpg"
import Blogcard from "./Blogcard";
import Footer from "../../Components/Footer/Footer";
const Blog = () => {
    const blog=useLoaderData()
    return (
        <>
        <div className="bg-cover bg-center w-full h-[400px]" style={{backgroundImage:`url("${bgblog}")`}}></div>
        <h1 className="md:text-4xl font-babas font-bold  text-center my-10">Blog Site</h1>
        <div className="max-w-7xl mx-auto px-5">
            {
                blog?.map((blogs, idx)=><Blogcard key={idx} card={blogs}></Blogcard>)
            }
        </div>
        <div className="mt-20">
        <Footer></Footer>
        </div>
        
        
        </>
    );
};

export default Blog;