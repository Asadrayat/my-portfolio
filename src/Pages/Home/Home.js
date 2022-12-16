import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import PrimeryButons from '../../Component/PrimeryButons';
import About from '../About/About';
import Qualities from '../About/Qualites/Qualities';
import Contact from '../Contact/Contact';
import Profile from '../Profile/Profile';
import Projects from '../Projects/Projects';

const Home = () => {

    return (
        <div>
            <div className="hero min-h-screen bg-gray-900" >
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