import React from 'react';
import pic from '../../assests/17635.jpg'
const Profile = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="flex w-2/4 flex-col gap-10 flex-50-gt-sm waypoint animated slide-in-left">
                    <img src={pic} className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2  " alt='' />
                    <div>
                        <p className='text-3xl font-bold text-center'>Who's this guy?</p>
                        <p className=' font-semibold text-center text-normal '>I am a junior web developer from Chittagong.To achieve the best possible results by making all possible efforts with innovative knowledge and technical skills while keeping honesty and punctuality at a higher priority. </p>
                    </div>
                </div>

                <div >
                    <div className='border border-solid m-5 w-full p-2 rounded bg-cyan-400'>
                        <progress className="progress w-56" value="90" max="100"  ></progress><p className='text-pink-600 text-xl font-bold'>React Js 90%</p>
                    </div>
                    <div className='border border-solid m-5 w-full p-2 rounded bg-cyan-400'>
                        <progress className="progress w-56" value="95" max="100"  ></progress><p className='text-pink-600 text-xl font-bold'>HTML5
                            95%</p>
                    </div>
                    <div className='border border-solid m-5 w-full p-2 rounded bg-cyan-400'>
                        <progress className="progress w-56" value="80" max="100"  ></progress><p className='text-pink-600 text-xl font-bold'>Javascript 80%</p>
                    </div>
                    <div className='border border-solid m-5 w-full p-2 rounded bg-cyan-400'>
                        <progress className="progress w-56" value="95" max="100"  ></progress><p className='text-pink-600 text-xl font-bold'>CSS3
                            95%</p>
                    </div>
                    <div className='border border-solid m-5 w-full p-2 rounded bg-cyan-400'>
                        <progress className="progress w-56" value="70" max="100"  ></progress><p className='text-pink-600 text-xl font-bold'>Firebase
                            70%</p>
                    </div>
                    <div className='border border-solid m-5 w-full p-2 rounded bg-cyan-400'>
                        <progress className="progress w-56" value="80" max="100"  ></progress><p className='text-pink-600 text-xl font-bold'>Git 80%</p>
                    </div>
                    <div className='border border-solid m-5 w-full p-2 rounded bg-cyan-400'>
                        <progress className="progress w-56" value="70" max="100"  ></progress><p className='text-pink-600 text-xl font-bold'>Mongodb 70%</p>
                    </div>
                    <div className='border border-solid m-5 w-full p-2 rounded bg-cyan-400'>
                        <progress className="progress w-56" value="70" max="100"  ></progress><p className='text-pink-600 text-xl font-bold'>C++ 70%</p>
                    </div>


                </div>
               
            </div>
        </div>
    );
};

export default Profile;