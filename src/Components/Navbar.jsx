import React from 'react'
import { useState } from 'react'
import logo from '../logo.svg'





const Navbar = ({ onPageChange }) => {

    const [activeLink, setActiveLink] = useState('home');
    const handleLinkClick = (link) => {
        setActiveLink(link);
        onPageChange(link);
    };

    const [isLoginModalOpen, setisLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setisSignUpModalOpen] = useState(false);

    const toggleLoginModal = () => {
        setisLoginModalOpen(!isLoginModalOpen);
    };

    const toggleSignUpModal = () => {
        setisSignUpModalOpen(!isSignupModalOpen);
    };


    return (
        < div className='flex justify-between w-[1200px] mx-auto items-center px-4 py-2 ' >
            <div className="logo">
                <img src={logo} alt="" className='flex w-20' />
            </div>
            <ul className='flex gap-x-10 text-slate-800 text-sm ' >
                <li className={`${activeLink === 'home' ? 'text-blue-600' : ''} hover:text-blue-600 cursor-pointer`} onClick={() => handleLinkClick('home')}> 
                      Home
                </li>
                <li className={`${activeLink === 'about' ? 'text-blue-600' : ''} hover:text-blue-600 cursor-pointer`} onClick={() => handleLinkClick('about')} >
                    About
                </li>
                <li className={`${activeLink === 'services' ? 'text-blue-600' : ''} hover:text-blue-600 cursor-pointer`} onClick={() => handleLinkClick('services')}>
                    Services
                </li>
                <li className={`${activeLink === 'contact' ? 'text-blue-600' : ''} hover:text-blue-600 cursor-pointer`} onClick={() => handleLinkClick('contact')} >
                    Contact
                </li>
            </ul>
            <div className="btn flex gap-x-5 text-slate-800 text-md " >
                <button className=' py-2 px-3 hover:text-gray-800 cursor-pointer bg-cyan-700 hover:bg-transparent text-gray-100 hover:border-slate-800 border-[1px] border-cyan-800 rounded-lg' onClick={toggleLoginModal} >
                    Login
                </button>
                <button className=' py-2 px-3 hover:text-gray-100 cursor-pointer bg-transparent hover:bg-cyan-700 hover:border-cyan-600 border-[1px] border-slate-800 rounded-lg' onClick={toggleSignUpModal} >
                    Sign Up
                </button>
            </div>



            {/* Login Modal */}
            {isLoginModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-1/3">
                        <h2 className="text-xl mb-4">Login</h2>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border border-gray-300 p-2 w-full mb-4"/>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="border border-gray-300 p-2 w-full mb-4"/>
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                            onClick={() => console.log('Logging in')}>
                            Login
                        </button>
                        <button
                            className="ml-4 text-red-500"
                            onClick={toggleLoginModal}>
                            Close
                        </button>
                    </div>
                </div>
            )
            }
            {/* Sign Up Modal */}
            {isSignupModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-1/3">
                        <h2 className="text-xl mb-4">Sign Up</h2>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="border border-gray-300 p-2 w-full mb-4"/>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border border-gray-300 p-2 w-full mb-4"/>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="border border-gray-300 p-2 w-full mb-4"/>
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                            onClick={() => console.log('Signing up')} >
                            Sign Up
                        </button>
                        <button
                            className="ml-4 text-red-500"
                            onClick={toggleSignUpModal}>
                            Close
                        </button>
                    </div>
                </div>
            )
            }
        </div>
    );
};
export default Navbar;