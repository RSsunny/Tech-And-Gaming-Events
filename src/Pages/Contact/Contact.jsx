import { useLoaderData } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";


const Contact = () => {
    const info=useLoaderData()
    const {address,city,companyName,contacts,description,images,socialLinks,state,zipCode,}=info.contactInformation
    return (
       < >
        <div className="bg-cover bg-center w-full h-[400px]" style={{backgroundImage:`url("${images.image3}")`}}></div>
        <div className="max-w-7xl mx-auto px-5">
            <div>
                <h1 className="text-xl md:text-5xl font-bold text-center my-5">{companyName}</h1>
                <p className="text-center md:w-[700px] mx-auto">{description}</p>
            </div>
            <h1 className="text-2xl font-bold text-center mt-10 mb-5">Our Information</h1>
            <div>

                <h1 className="inline-block mr-3">{city} {address}</h1>
                <span> Zip Cod:{zipCode}</span>
                <span className="ml-2">state:{state}</span>
                <p>Email:</p>
                <p className="md:pl-5">
                    {
                        contacts.map((cont,index)=><li key={index}>{cont.email}</li>)
                    }
                </p>

               <div className="flex flex-col md:flex-row text-green-500 mt-5 gap-2 md:gap-5 text-xl font-bold"> 
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">instagram</a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
                    <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">twitter</a>
               </div>
               <div>
                <p className="my-5"><span className="font-bold">compmany Details :</span> Level-Up Entertainment: Elevating Gaming Experiences**

                Level-Up Entertainment is your gateway to extraordinary gaming events. We are a dynamic gaming event company committed to creating unforgettable experiences for all gaming enthusiasts. With a passion for gaming, innovation, and inclusivity, we redefine what it means to be part of the gaming community.

                **What Makes Us Unique**

                At Level-Up Entertainment, we stand out for several key reasons:

                **1. Diverse Portfolio:** Our gaming event offerings are as diverse as the gaming world itself. From thrilling esports tournaments to nostalgic retro gaming nights and cosplay extravaganzas, we cater to a wide range of interests and tastes.

                **2. Inclusivity:** We prioritize inclusivity, ensuring that our events are welcoming spaces for gamers of all backgrounds and skill levels. Diversity is celebrated, and everyone is encouraged to participate.

                **3. Cutting-Edge Technology:** We invest in top-of-the-line gaming equipment to provide seamless, lag-free experiences for our participants. Our commitment to technology ensures that every gamer can fully immerse themselves in the action.

               </p>
            </div>

            </div>
        </div>
        <div className="mt-20">
            <Footer></Footer>
        </div>
       
       </>
    );
};

export default Contact;