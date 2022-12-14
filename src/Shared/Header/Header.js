import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to="/contact"><li><button className='btn btn-dark btn-outline' >Contact</button></li></Link>
                            <Link to="/projects"><li><button className='btn btn-dark btn-outline'>Portfolio</button></li></Link>
                        </ul>
                    </div>
                    <a href='/' className=" animate-pulse  text-3xl normal-case font-bold ">Rayat's Planet</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to="/contact"><li><button className='btn btn-dark btn-outline'>Contact</button></li></Link>
                        <li tabIndex={0}>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <Link to="/projects"><li><button className='btn btn-dark btn-outline mx-10'>Portfolio</button></li></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='/profile' className="btn btn-outline">Profile</a>
                </div>
            </div>
        </div>
    );
};

export default Header;