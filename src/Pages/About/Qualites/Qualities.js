import React from 'react';
import img from '../../../assests/quality.png';
import Quality from '../Quality/Quality';
const Qualities = () => {
    const qualitiesData = [
        {
            id: 1,
            name: 'First',
            description: 'Fast load times and lag free interaction, my highest priority.',
            img: img
        },
        {
            id: 2,
            name: 'Responsive',
            description: 'My layouts will work on any device, big or small.',
            img: img
        },
        {
            id: 3,
            name: 'Dynamic',
            description: "Websites don't have to be static, I love making pages come to life.",
            img: img
        },
    ]
    return (
        <div className='my-10 '>

            <div className='mt-16'>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        qualitiesData.map(quality => <Quality
                        key={quality.id}
                        quality={quality}
                        ></Quality>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Qualities;