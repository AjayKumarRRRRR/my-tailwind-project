import React from 'react'
import FooterBackground from './Images/footer-bg2.png'
import '../Components/ExperienceCard.css'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from 'react';








export default function Footer({ heading, text1, text2, text3, PostHeading, PostImage, title, QuickLink, Opening }) {
    useEffect(() => {
  AOS.init({ duration: 800, once: false });
}, []);
const [email, setEmail] = useState("");
    return (
        <div className="footer-section w-[1200px]   mx-auto gap-10   relative pt-20 mt-10 grid grid-cols-[1fr 1fr 1fr] px-10 justify-around hover:bg-gray-900 bg-gray-900 "  >
            <div className="first-part flex flex-col  items-start p-5 text-white hover:bg-gray-900   text-dark:500 hover:rounded    background-transparent " data-aos="fade-up" >
                <h2 className='text-2xl font-bolder border-b border-gray-100 pb-2'>{heading}</h2>
                <div className="location hover:bg-gray-800 p-2 rounded-lg my-4 flex items-center gap-4 w-full cursor-pointer  " onClick={() => window.open("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1715.3349556790404!2d76.69204392563758!3d30.69956217656625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefc24f211ee9%3A0x872c96c5e77fef92!2sGR%20TOWER!5e0!3m2!1sen!2sin!4v1764918133637!5m2!1sen!2sin", "_blank")}>
                    <div className="icon " >
                        <i class="fa-solid fa-location-crosshairs pr-8 pl-4 py-4 text-white bg-red-400 rounded-full"></i>
                    </div>
                    <p> {text1} </p>
                </div>
                <div className="phone hover:bg-gray-800 p-2 rounded-lg my-3 flex cursor-pointer items-center gap-4 w-full" onClick={() => window.location.href = "tel:+91 98765 43210"} >
                    <div className="icon " >
                        <i class="fa-solid fa-mobile pr-8 pl-4 py-4 text-white bg-red-400 rounded-full"></i>
                    </div>
                    <p> {text2} </p>
                </div>
                <div className="email hover:bg-gray-800 p-2 rounded-lg my-3 cursor-pointer flex items-center gap-4 w-full " onClick={() => window.location.href = "mailto:test@gmail.com"}>
                    <div className="icon " >
                        <i class="fa-solid fa-inbox pr-8 pl-4 py-4 text-white bg-red-400 rounded-full"></i>
                    </div>
                    <p> {text3} </p>
                </div>
            </div>
            {/* <div className="second-part text-white hover:bg-gray-900   text-dark:500 hover:rounded background-transparent p-5 flex flex-col  items-start" data-aos="fade-up" >
                <h2 className='text-2xl border-b border-gray-100 pb-3 font-bolder '>{PostHeading}</h2>
                <div className="recent-posts flex items-center gap-4 mt-4">
                    {PostImage && <img src={PostImage} alt="logo" className='image object-cover object-center rounded mb-4 w-20 h-20' />}
                    <div className="text">
                        <p>{title}</p>
                        <span className='text-gray-500 text-base'>Jan 02, 2024</span>
                    </div>
                </div>
                <div className="recent-posts flex items-center gap-4 mt-4">
                    {PostImage && <img src={PostImage} alt="logo" className='image object-cover object-center rounded mb-4 w-20 h-20' />}
                    <div className="text">
                        <p>{title}</p>
                        <span className='text-gray-500 text-base'>Jan 02, 2024</span>
                    </div>
                </div>

            </div> */}
            <div className="second-part text-white hover:bg-gray-900   text-dark:500 hover:rounded p-5 flex flex-col  items-start"  data-aos="fade-up" >
                <h2 className='text-2xl border-b border-gray-100 pb-3 font-bolder '>{QuickLink}</h2>
                <ul className='flex flex-col gap-4 mt-4'>
                    <li className='hover:text-cyan-600 cursor-pointer'>Home</li>
                    <li className='hover:text-cyan-600 cursor-pointer'>About</li>
                    <li className='hover:text-cyan-600 cursor-pointer'>Services</li>
                    <li className='hover:text-cyan-600 cursor-pointer'>Contact</li>
                    <li className='hover:text-cyan-600 cursor-pointer'>Blog</li>
                </ul>
            </div>
            <div className="fourth-part text-white hover:bg-gray-900  text-dark:500 background-transparent p-5 flex flex-col gap-5 hover:rounded  items-start"  data-aos="fade-up" >
                <h2 className='text-2xl border-b border-gray-100 font-bolder pb-3'> {Opening} </h2>
                <div className="bottom">
                    <p>Our support available to help you 24 hours a day, seven days a week.</p>
                    <div className="timing mt-4 gap-2 flex flex-col hover:text-cyan-400 pt-5 ">
                        <p className='flex  justify-between'>Mon - Fri: <span>9:00 AM - 6:00 PM</span> </p>
                        <p className='flex justify-between '>Sat: <span>10:00 AM - 4:00 PM</span> </p>
                        <p className='flex justify-between '>Sun: <span>Closed</span> </p>
                    </div>
                </div>
            </div>
         <div className="newsletter  flex flex-col col-span-4  justify-center items-center mt-0 hover:bg-gray-900" data-aos="fade-up" >
            <h2 className='text-cyan-600 text-center text-3xl mb-5 font-bold' >
                Subscribe to our newsletter for the latest updates.
            </h2>
            <div className="input-group mt-4 flex w-100     " >
                <input type="email" placeholder='Enter your email' autoComplete='on' className='p-2 rounded-l-lg border text-gray-300 bg-gray-900 border-gray-300 focus:outline-none w-80'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                <button className='bg-cyan-800 text-white p-2 rounded-r-lg hover:bg-cyan-700 w-40' onClick={() =>{if(!email) return alert("Please enter your email");
                if (!email.includes("@gmail.com")) {
      return alert("Please include '@gmail.com' in your email");
    }
                    alert(`Subscribed with ${email}`); setEmail("");
                }} >
                    Subscribe
                </button>
            </div>
         </div>
            <div className="copyright flex col-span-4  justify-center items-center mt-0 hover:bg-gray-900" >
                <p className='text-center text-gray-100 my-5'> &copy; 2024 Bakery. All rights reserved. Designed by <strong className='text-cyan-400 font-xl'>Ajay Kumar</strong> </p>
            </div>

        </div>
    )
}