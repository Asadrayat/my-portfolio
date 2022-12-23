import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="footer items-center p-4  text-neutral-content">
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a className='text-3xl font-bold mb-10' target="_blank" href='https://www.facebook.com/AsadMohammadRayat/'><div ><AiOutlineFacebook></AiOutlineFacebook></div></a>
                <a target="_blank" className='text-3xl font-bold mb-10' href='https://www.facebook.com/AsadMohammadRayat/'><div ><AiOutlineLinkedin></AiOutlineLinkedin></div></a>
                <a target="_blank" className='text-3xl font-bold mb-10' href='https://www.facebook.com/AsadMohammadRayat/'><div ><AiOutlineInstagram></AiOutlineInstagram></div></a>
            </div>
        </footer>
    );
};

export default Footer;