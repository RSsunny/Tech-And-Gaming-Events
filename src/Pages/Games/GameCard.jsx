import PropTypes from 'prop-types'; 

const GameCard = ({card}) => {
    
    const {cardDescription,cardName,cardRarity,cardType,image}=card
    return (
        <div className='border'>
            <div className="h-[200px]">
                <img src={image} alt={cardName} className="w-full h-full"/>

            </div>
            <div className="flex justify-between mt-3 border-b pb-2 px-2">
                <h1>{cardName}</h1>
                <p>{cardType}</p>
                <p>{cardRarity}</p>
            </div>
            <p className='my-2 px-2'>{cardDescription}</p>
            
        </div>
    );
};

export default GameCard;

GameCard.propTypes = {
    card:PropTypes.object.isRequired
}