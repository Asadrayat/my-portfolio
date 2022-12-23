import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import PrimeryButons from '../../Component/PrimeryButons';
import About from '../About/About';
import Qualities from '../About/Qualites/Qualities';
import Contact from '../Contact/Contact';
import Profile from '../Profile/Profile';
import Projects from '../Projects/Projects';
import { AiOutlineArrowDown, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
const Home = () => {

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content text-center">
                    <div className="w-full">
                        <h1 className="text-5xl text-pink-600 font-bold">
                            <TypeAnimation
                                sequence={["Hi, I'm Asad Mohammad Rayat", 3000, '']}
                                speed={40}
                                wrapper="h2"
                                repeat={Infinity}
                            />
                        </h1>
                        <h1 className="text-5xl font-bold text-white mb-10">I'm a mern-stack web developer.
                        </h1>

                        <a href="resume.pdf" download="resume.pdf"><PrimeryButons>Get Resume</PrimeryButons></a>

                        <div className='flex gap-10 mt-10 justify-center'>
                            <a target="_blank" className='text-5xl font-bold mb-10' href='https://www.facebook.com/AsadMohammadRayat/'><div ><AiOutlineFacebook></AiOutlineFacebook></div></a>
                            <a target="_blank" className='text-5xl font-bold mb-10' href='https://www.facebook.com/AsadMohammadRayat/'><div ><AiOutlineLinkedin></AiOutlineLinkedin></div></a>
                            <a target="_blank" className='text-5xl font-bold mb-10' href='https://www.facebook.com/AsadMohammadRayat/'><div ><AiOutlineInstagram></AiOutlineInstagram></div></a>
                            <Link to="/profile"><div className='animate-bounce text-5xl font-bold mb-10 text-pink-600 '><AiOutlineArrowDown></AiOutlineArrowDown></div></Link>
                        </div>
                    </div>
                </div>
            </div>
            <About></About>
            <Profile></Profile>
            <Qualities></Qualities>
            <Projects></Projects>
            <Contact></Contact>
        </div >
    );
};

export default Home;