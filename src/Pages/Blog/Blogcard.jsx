import PropTypes from 'prop-types';

const Blogcard = ({card}) => {
    const {author,content,date,discription,image,
        title}=card
    return (
        <div className="my-10 space-y-5">
            <h1 className='md:text-4xl font-bold'>{title}</h1>
            <div className="w-full md:h-[600px]">
                <img className="w-full h-full" src={image} alt="" />
            </div>
            <div className="flex flex-row-reverse justify-between ">
            <h1>{date}</h1>
            <p>{author}</p>
            </div>
            <p>{discription}</p>
            <p>{content}</p>
            <p>{discription}</p>
            <p>{content}</p>
            <p>{discription}</p>
            <p>{content}</p>
        </div>
    );
};

export default Blogcard;

Blogcard.propTypes = {
    card: PropTypes.object.isRequired
}