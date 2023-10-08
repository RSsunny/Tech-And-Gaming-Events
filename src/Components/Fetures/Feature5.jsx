import PropTypes from 'prop-types';

import Card from "../Card/Card";


const Feature5 = ({events}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-2 mb-20">
            {
                events?.map((data , idx)=><Card key={idx} eventCard={data}></Card>)
            }
        </div>
    );
};

export default Feature5;

Feature5.propTypes = {
    events:PropTypes.array
}