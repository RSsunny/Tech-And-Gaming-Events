import Title from "../Title/Title";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import Feature4 from "./Feature4";
import Feature5 from "./Feature5";
import Feature6 from "./Feature6";


const Fetures = () => {
    
    const title1={
        titleHead:'Tech Conferences and Expos',
        titleDescription:" You can have the chance to talk to them directly and learn more about the way they work, their benefits, and their expectations."
    }
    const title2={
        titleHead:'Exhibitions',
        titleDescription:" You can have the chance to have a look at the exhibitions that are going on in the city."
    }
 
    return (
        <>
            <Title title={title1}></Title>
            <Feature1></Feature1>


            <Title title={title2}></Title>
            <Feature2></Feature2>


            
            <Feature3></Feature3>


            <Title title={title1}></Title>
            <Feature4></Feature4>


            <Title title={title1}></Title>
            <Feature5></Feature5>



            <Title title={title1}></Title>
            <Feature6></Feature6>
            


        
        </>
    );
};

export default Fetures;