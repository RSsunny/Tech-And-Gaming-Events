import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
const Card = ({eventCard}) => {
    const {user}=useAuth()
    const {id,image ,event_name,place,date,rules,price
    }=eventCard;
    

    useEffect(()=>{
        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init', 
            animatedClassName: 'aos-animate', 
            useClassNames: false, 
            disableMutationObserver: false,
            debounceDelay: 50, 
            throttleDelay: 99,
            offset: 120,
            delay: 0, 
            duration: 2000, 
            easing: 'ease', 
            once: false, 
            mirror: false,
            anchorPlacement: 'top-bottom',
            
        });

    },[])
    return (
        <div className="overflow-hidden">
            <div className="relative bg-cover bg-center h-[400px] " style={{backgroundImage:`url(${image})`}}>
                <div className="absolute inset-0 bg-black  opacity-40 "></div>
                <div className="absolute inset-0 text-white font-robato text-xl font-bold pl-2 overflow-hidden" data-aos ="fade-right" data-aos-mirror="true" data-aos-delay="100">
                <h1 className="text-4xl font-babas mt-3  text-primary font-medium">{event_name}</h1>
                <p className="">{rules[1]}</p>
                <p>{rules[0]}</p>
                <p className="my-2 text-xl font-bold">
                {place}</p>
                <p className="mb-10">{date}</p>
                <div className="absolute bottom-5 border px-4 py-2 rounded-full cursor-pointer text-xs hover:bg-secondary hover:bg-opacity-60 duration-500 ease-linear">
                <Link to={user ?`/event/${id}`:'/login'} state={`/event/${id}`}>Join this Event {price}</Link>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Card;

Card.propTypes = {
    eventCard:PropTypes.object.isRequired
}