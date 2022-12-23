import React from 'react';
import Particles from 'react-tsparticles';
const Contact = () => {
    return (
        <div>
            <div className="grid text-5xl text-light font-bold rounded-box place-items-center">Contact</div>
            <div className="divider "></div>
            <section className='py-16 my-20 ' style={{
                background: `url(${Particles})`,
                backgroundSize: 'cover'
            }}>
                <p className='text-3xl text-pink-500 text-center font-bold'>Have a question or want to work together?</p>
                <div className='flex justify-center  '>
                    <form  action="https://formsubmit.co/asad.rayat4@email.com" method="POST" className='flex flex-col '>
                        <div className="form-control my-4">
                            <label className="input-group">
                                <input type="text" placeholder="info@site.com" className="input input-bordered w-96" />
                            </label>
                        </div>
                        <div className="form-control my-4">
                            <label className="input-group">
                                <input type="text" placeholder="Subject" className="input input-bordered w-96" />
                            </label>
                        </div>
                        <div className="form-control my-4">
                            <label className="input-group">

                                <input type="text" placeholder="message" className="input input-bordered h-44 w-96" />
                            </label>
                        </div>
                        <div className="form-control my-4">
                            <button className='btn btn-primary bg-gradient-to-r from-primary to-active text-white' type='submit'>Submit</button>
                        </div>
                    </form>

                </div>
            </section >
        </div >
    );
};

export default Contact;