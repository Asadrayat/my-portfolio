import React from 'react';

const Quality = ({ quality }) => {
    const { name, description, img } = quality;
    return (
        <div className="card  shadow-xl ">
            <figure className="hex-wrap waypoint animated flip-in-x circle">
                <img  src={img} alt="Shoes" className="bg-red-400 p-5 w-24 mask mask-circle" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl font-semibold">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Quality;