import PropTypes from 'prop-types'

const Title = ({title}) => {
    return (
        <div className="text-center mx-auto my-20 px-5">
            <h1 className='text-2xl md:text-4xl font-babas font-semibold'>{title.titleHead}</h1>
            <p className="md:max-w-[500px] mx-auto font-robato mt-5">{title.titleDescription}</p>
        </div>
    );
};

export default Title;

Title.propTypes = {
    title:PropTypes.object.isRequired
}