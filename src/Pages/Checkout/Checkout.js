import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Checkout = () => {
    const { live_link, title, about, img1, img2, img3 } = useLoaderData();
    console.log(title);
    return (
        <div className="hero max-h-full">
            <div className="hero-content flex-col lg:flex-col justify-items-start">
                <div className="flex justify-items-start flex-col flex-50-gt-sm waypoint animated slide-in-left">
                    <p className='text-center text-pink-600 text-3xl font-bold my-10'>{title}</p>
                    <div className="card w-auto border border-solid">
                        <div className="card-body items-center ">

                            <p className='text-xl text-start'>{about}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-error">Client Code</button>
                                <button className="btn btn-outline btn-error">Server Code</button>
                                <a href={live_link} target={'_blank'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='w-full p-5 bg-black' >
                    <div className='grid grid-cols-3 gap-2 rounded-3xl'>
                        <div className="avatar">
                            <div className="w-full   h-96 rounded-xl ring ring-error  ring-offset-base-100 ring-offset-2">
                                <img className='object-contain' src={img1} alt='pic' />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-full   h-96 rounded-xl ring ring-error  ring-offset-base-100 ring-offset-2">
                                <img className='object-contain' src={img2} alt='pic' />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-full   h-96 rounded-xl ring ring-error  ring-offset-base-100 ring-offset-2">
                                <img className='object-contain' src={img3} alt='pic' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;