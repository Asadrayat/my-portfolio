import React from 'react';

const PrimeryButons = ({children}) => {
    return (
        <button className='btn  bg-gradient-to-r from-info to-accent text-white'>{children}</button>
    );
};

export default PrimeryButons;