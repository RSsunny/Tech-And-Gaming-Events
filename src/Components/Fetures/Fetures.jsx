import Title from "../Title/Title";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import Feature4 from "./Feature4";
import Feature5 from "./Feature5";
import Feature6 from "./Feature6";
import PropTypes from 'prop-types';
import bgcover from '../../assets/bg1.jpg'

const Fetures = ({events}) => {
    
    const title1={
        titleHead:'Tech Conferences and Expos',
        titleDescription:" You can have the chance to talk to them directly and learn more about the way they work, their benefits, and their expectations."
    }
    // const title2={
    //     titleHead:'Exhibitions',
    //     titleDescription:" You can have the chance to have a look at the exhibitions that are going on in the city."
    // }
    const title3={
        titleHead:'Tournaments',
        titleDescription:" You can have the chance to have a look at the exhibitions that are going on in the city."
    }
    const title4={
        titleHead:'Our Events',
        titleDescription:" You can have the chance to have a look at the exhibitions that are going on in the city."
    }
 
    return (
        <>
            <Title title={title4}></Title>
            <Feature5 events={events}></Feature5>

            <div className="bg-cover bg-center" style={{backgroundImage:`url("${bgcover}")`}}>
                
                <Title title={title1}></Title>
                <Feature1></Feature1>


                {/* <Title title={title2}></Title> */}
                <Feature2></Feature2>
            </div>


            
            <Feature3></Feature3>


            <Title title={title3}></Title>
            <Feature4></Feature4>


            <Title title={title1}></Title>
            <Feature5></Feature5>



            <Title title={title1}></Title>
            <Feature6></Feature6>
            


        
        </>
    );
};

export default Fetures;

Fetures.propTypes = {
    events:PropTypes.array
}