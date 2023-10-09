
import PropTypes from 'prop-types'; 
const ServicesCard = ({scard}) => {

    const {description,image,serviceName,}=scard;
    return (
        <div>
            <div className='h-[200px] '>
                <img className='h-full w-full' src={image} alt={serviceName}></img>
            </div>
            <div>
                <h3 className='text-xl font-bold my-3'>{serviceName}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServicesCard;

ServicesCard.propTypes = {
    scard:PropTypes.object.isRequired
}