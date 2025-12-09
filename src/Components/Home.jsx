import React from 'react'
import bannerImage from '../Components/Images/slide1.jpg'
import pic1 from '../Components/Images/pic1.jpg'
import pic2 from '../Components/Images/pic2.jpg'
import pic3 from '../Components/Images/pic3.jpg'
import pic4 from '../Components/Images/pic4.jpg'
import download from '../Components/Images/download.png'
import bg4 from '../Components/Images/bg4.jpg'
import pic5 from '../Components/Images/pic5.jpg'
import icon1 from '../Components/Images/icon1.png'
import icon2 from '../Components/Images/icon2.png'
import icon3 from '../Components/Images/icon3.png'
import icon4 from '../Components/Images/icon4.png'
import icon5 from '../Components/Images/icon5.png'
import icon6 from '../Components/Images/icon6.png'
import './Home.css'
import cake1 from '../Components/Images/cake1.jpg'
import veganPie from '../Components/Images/veganpie.jpg'
import lemonCake from '../Components/Images/lemoncake.jpg'
import weddingCake from '../Components/Images/weddingcake.jpg'
import fruitCake from '../Components/Images/fruitcake.jpg'
import SmallCard0 from './Images/smallcard.jpg'
import SmallCard2 from './Images/smallcard2.jpg'
import SmallCard3 from './Images/smallcard3.jpg'
import SmallCard4 from './Images/smallcard4.jpg'
import SmallCard5 from './Images/smallcard5.jpg'
import SmallCard6 from './Images/smallcard6.jpg'
import BlogCardImage from './Images/blogcard1.jpg'
import BlogCardImage2 from './Images/blogcard2.jpg'
import BlogCardImage3 from './Images/blogcard3.jpg'
import FooterBg from './Images/footer-bg2.png'


import ExperienceCard from './ExperienceCard'
import ImageWithText from './ImageWithText'
import SmallCard from './SmallCard'
import BlogCard from './BlogCard'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <div className='w-[1200px] p-[150px] mx-auto bg-center relative ' style={{ backgroundImage: `url(${bannerImage})` }} >
                {/* <span className='absolute inset-0 opacity-50 t-0 bg-no-repeat' style={{ backgroundImage: `url(${download})` }} >
         
                </span> */}
                <p className='text-3xl text-purple-100 font-regular  text-center mt-5'>Cakes & Bakery</p>
                <div className="image flex justify-center mt-10 relative">
                    <img src={bannerImage} alt="Home" className='w-[600px] h-[300px] rounded-lg shadow-lg' />
                </div>

                <h2 className='absolute inset-0 flex items-center justify-center text-[80px] text-violet-100 font-[800]'>
                    Welcome To Bakery
                </h2>
                <p className='text-center text-3xl text-purple-100 mt-10'>
                    The Best Cakes In New York
                </p>
            </div>
            <div className='w-[1200px] flex overflow-hidden justify-evenly gap-5 mx-auto my-10 p-10 border border-gray-300 rounded-lg shadow-md' >
                <div className=" card relative  pt-20 bg-center bg-cover rounded " style={{ backgroundImage: `url(${pic1})` }} >
                    <span className='absolute bg-stone-500 inset-0 opacity-40 ' ></span>
                    <div className="text-content relative  z-10 flex flex-col gap-2  mt-[50px] py-10 px-10 text-center">
                        <h2 className='text-3xl text-slate-950 font-extrabold'> Macarons</h2>
                        <p className='text-base text-slate-950'>Lorem Ipsum is simply</p>
                        <button className=' px-5 py-3 bg-cyan-600 rounded-full text-slate-100 hover:text-yellow-400 hover:bg-cyan-900 cursor-pointer '>
                            More Details
                        </button>
                    </div>
                </div>
                <div className=" card relative  pt-20 bg-center bg-cover rounded " style={{ backgroundImage: `url(${pic2})` }} >
                    <span className='absolute bg-stone-500 inset-0 opacity-40 ' ></span>
                    <div className="text-content relative  z-10 flex flex-col gap-2  mt-[50px] py-10 px-10 text-center">
                        <h2 className='text-3xl text-slate-950 font-extrabold'> Small Cakes</h2>
                        <p className='text-base text-slate-950'>Lorem Ipsum is simply</p>
                        <button className=' px-5 py-3 bg-cyan-600 rounded-full text-slate-100 hover:text-yellow-400 hover:bg-cyan-900 cursor-pointer '>
                            More Details
                        </button>
                    </div>
                </div>
                <div className=" card relative  pt-20 bg-center bg-cover rounded " style={{ backgroundImage: `url(${pic3})` }} >
                    <span className='absolute bg-stone-500 inset-0 opacity-40 ' ></span>
                    <div className="text-content relative  z-10 flex flex-col gap-2  mt-[50px] py-10 px-10 text-center">
                        <h2 className='text-3xl text-slate-950 font-extrabold'>Occasion Cakes</h2>
                        <p className='text-base text-slate-950'>Lorem Ipsum is simply</p>
                        <button className=' px-5 py-3 bg-cyan-600 rounded-full text-slate-100 hover:text-yellow-400 hover:bg-cyan-900 cursor-pointer '>
                            More Details
                        </button>
                    </div>
                </div>
                <div className=" card relative  pt-20 bg-center bg-cover rounded " style={{ backgroundImage: `url(${pic4})` }} >
                    <span className='absolute bg-stone-500 inset-0 opacity-40 ' ></span>
                    <div className="text-content relative  z-10 flex flex-col gap-2  mt-[50px] py-10 px-10 text-center">
                        <h2 className='text-3xl text-slate-950 font-extrabold'> Cupcakes</h2>
                        <p className='text-base  text-slate-950'>Lorem Ipsum is simply</p>
                        <button className=' px-5 py-3 bg-cyan-600 rounded-full text-slate-100 hover:text-yellow-400 hover:bg-cyan-900 cursor-pointer '>
                            More Details
                        </button>
                    </div>
                </div>
            </div>
            <div className="second-section w-[1200px] mx-auto p-10 flex flex-col justify-center items-center gap-10" >
                <img src={cake1} alt="cake" className='w-20' />
                <h2 className='font-medium text-5xl text-cyan-400'>It’s a party and you’re invited</h2>
                <p className='text-2xl text-center px-20'>Join <strong> DexignZone Bakery™ </strong> to earn Gold level benefits like free Cakes and food, get free refills, pay and order with your phone, and more.</p>
                <p className='text-xl text-center px-20 pt-1'>Exclusive deals on Cakes, delivered straight to your inbox Join Now</p>
            </div>
            <div className="third-section w-[1200px] mx-auto my-10 p-10 rounded-lg shadow-lg bg-fixed" style={{ backgroundImage: `url(${bg4})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                <h2 className='text-5xl text-stone-100 text-center mb-5'>What Do We Offer For You?</h2>
                <p className='w-[70%] mx-auto text-center text-stone-200'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <div className="bottom mt-10 flex  mt-10 gap-20 ">
                    <img src={pic5} alt="cake" className='w-[40%] rounded' />
                    <div className="icon-set w-[60%] flex items-center" >
                        <ul className='grid gap-20 text-stone-200 justify-center items-center text-lg grid-row-3 grid-cols-[1fr_1fr]' >
                            <li className='flex flex-row items-center gap-2 ' >
                                <img src={icon1} alt="" />
                                <span>
                                    <h3 className='text-xl font-bold hover:text-yellow-600'>Pancakes</h3>
                                    <p className='text-[12px]'>Lorem Ipsum is dummy</p>
                                </span>
                            </li>
                            <li className='flex flex-row items-center gap-2 ' >
                                <img src={icon2} alt="" />
                                <span>
                                    <h3 className='text-xl font-bold hover:text-yellow-600'>Muffin</h3>
                                    <p className='text-[12px]'>Lorem Ipsum is dummy</p>
                                </span>
                            </li>
                            <li className='flex flex-row items-center gap-2 ' >
                                <img src={icon3} alt="" />
                                <span>
                                    <h3 className='text-xl font-bold hover:text-yellow-600'>Pumpkin cakes</h3>
                                    <p className='text-[12px]'>Lorem Ipsum is dummy</p>
                                </span>
                            </li>
                            <li className='flex flex-row items-center gap-2 ' >
                                <img src={icon4} alt="" />
                                <span>
                                    <h3 className='text-xl font-bold hover:text-yellow-600'>Pumpkin Cupcakes</h3>
                                    <p className='text-[12px]'>Lorem Ipsum is dummy</p>
                                </span>
                            </li>
                            <li className='flex flex-row items-center gap-2 ' >
                                <img src={icon5} alt="" />
                                <span>
                                    <h3 className='text-xl font-bold hover:text-yellow-600'> Cake Services </h3>
                                    <p className='text-[12px]'>Lorem Ipsum is dummy</p>
                                </span>
                            </li>
                            <li className='flex flex-row items-center gap-2 ' >
                                <img src={icon6} alt="" />
                                <span>
                                    <h3 className='text-xl font-bold hover:text-yellow-600'>Birthday Cake</h3>
                                    <p className='text-[12px]'>Lorem Ipsum is dummy</p>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="fourth-section">
                <div className="w-[1200px] mx-auto my-10 p-10 rounded-lg shadow-lg bg-white flex justify-between items-center" >
                    <div className="left-section w-1/2 gap-5" >
                        <h2 className='text-4xl font-bold text-cyan-400'>Sale And Delivery Points</h2>
                        <h3 className='text-xl mt-3 font-[900]'>Where to buy our high quality Cake</h3>
                        <p className='text-md mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                        </p>
                        <p className='text-md mt-2'>
                            First and foremost I am a chef, whether behind the stove at one of my Northern California restaurants or for the past 15 years in front of the Lorem Ipsum is simply Bakery dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                        </p>
                        <p className='text-md mt-2'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                        </p>
                        <button className=' mt-5 px-5 py-3 bg-cyan-600 rounded-full text-slate-100 hover:text-yellow-400 hover:bg-cyan-900 cursor-pointer '>
                            Get Started
                        </button>
                    </div>
                    <div className="right-section w-1/2 flex justify-center items-center p-5" >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1715.3349556790404!2d76.69204392563758!3d30.69956217656625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefc24f211ee9%3A0x872c96c5e77fef92!2sGR%20TOWER!5e0!3m2!1sen!2sin!4v1764918133637!5m2!1sen!2sin" className='w-[600px] h-[400px] rounded style="border:0;" allowfullscreen="" ' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="cake-section">
                <div className="w-[1200px] mx-auto  py-10 rounded-lg shadow-lg bg-white flex justify-between items-center overflow-hidden" >
                    <div className="card-cake relative w-full h-full flex justify-center items-center p-2" >
                        <div className="img  w-[300px] h-[300px] rounded-lg shadow-lg overflow-hidden" >
                            <img src={veganPie} alt="" />
                        </div>
                        <h2 className=' absolute inset-0 flex items-center justify-center mt-[180px] text-gray-700 text-[40px] font-[700] z-10  '>Vegan Pie</h2>
                    </div>
                    <div className="card w-full relative h-full flex justify-center items-center p-2" >
                        <div className="img  w-[300px] h-[300px] rounded-lg shadow-lg overflow-hidden" >
                            <img src={lemonCake} alt="" />
                        </div>
                        <h2 className=' absolute inset-0 flex items-center justify-center mt-[180px] text-gray-700 text-[40px] font-[700]  '>Vegan Pie</h2>
                    </div>
                    <div className="card w-full h-full relative flex justify-center items-center p-2" >
                        <div className="img  w-[300px] h-[300px] rounded-lg shadow-lg overflow-hidden" >
                            <img src={weddingCake} alt="" />
                        </div>
                        <h2 className=' absolute inset-0 flex items-center justify-center mt-[180px] text-gray-700 text-[40px] font-[700]  '>Vegan Pie</h2>
                    </div>
                    <div className="card w-full h-full relative flex justify-center items-center p-2" >
                        <div className="img relative w-[300px] h-[300px] rounded-lg shadow-lg overflow-hidden" >
                            <img src={fruitCake} alt="" />
                        </div>
                        <h2 className=' absolute inset-0 flex items-center justify-center mt-[180px] text-gray-700 text-[40px] font-[700]  '>Vegan Pie</h2>
                    </div>
                </div>
            </div>
            <div className="second-section w-[1200px] mx-auto p-10 flex flex-col justify-center items-center gap-10" >
                <img src={cake1} alt="cake" className='w-20' />
                <h2 className='font-medium text-5xl text-cyan-400'>It’s a party and you’re invited</h2>
                <p className='text-2xl text-center px-20'>Join <strong> DexignZone Bakery™ </strong> to earn Gold level benefits like free Cakes and food, get free refills, pay and order with your phone, and more.</p>
                <p className='text-xl text-center px-20 pt-1'>Exclusive deals on Cakes, delivered straight to your inbox Join Now</p>
            </div>
            <div className="flex w-[1200px] mx-auto p-10 flex flex-  justify-center items-center gap-10">
                <div className="flex gap-6 justify-center mt-10">

                    <ExperienceCard
                        number="53+"
                        text="Years of Experience"
                        color="text-blue-600"
                    />

                    <ExperienceCard
                        number="120+"
                        text="Completed Projects"
                        color="text-green-600"
                    />

                    <ExperienceCard
                        number="75+"
                        text="Happy Customers"
                        color="text-yellow-600"
                    />

                    <ExperienceCard
                        number="25+"
                        text="Team Members"
                        color="text-red-600"
                    />
                </div>
            </div>
            <div className="image-with-text">
                <ImageWithText
                    heading="Limited Time Offer"
                    subheading="Wedding Cake Sale !"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                    buttonText="Get Now"
                />

            </div>

            <div className="small-cards-section  w-[1200px] mx-auto my-10 p-10 rounded-lg shadow-lg bg-white grid grid-cols-6 gap-4">
                <SmallCard
                    title="Bakery"
                    SmallCardImage={SmallCard0} />
                <SmallCard
                    title="Bakery"
                    SmallCardImage={SmallCard6} />
                <SmallCard
                    title="Bakery"
                    SmallCardImage={SmallCard2} />
                <SmallCard
                    title="Bakery"
                    SmallCardImage={SmallCard3} />
                <SmallCard
                    title="Bakery"
                    SmallCardImage={SmallCard4} />
                <SmallCard
                    title="Bakery"
                    SmallCardImage={SmallCard5} />
            </div>
            <div className="second-section w-[1200px] mx-auto p-10 flex flex-col justify-center items-center gap-10" >
                <img src={cake1} alt="cake" className='w-20' />
                <h2 className='font-medium text-5xl text-gray-600'>From The Blog</h2>
                <p className='text-2xl text-center px-20 pt-0'>Latest news and updates</p>
            </div>
            <div className='flex w-[1200px]   mx-auto gap-10 my-10 p-10 ' >
                <BlogCard
                    title="Understand The Background Of Bakery Now."
                    BlogCardImage={BlogCardImage}
                    subCategory="Cake,"
                    category="Biscuits" />
                <BlogCard
                    title="Understand The Background Of Bakery Now."
                    BlogCardImage={BlogCardImage2}
                    subCategory="Cake,"
                    category="Biscuits" />
                <BlogCard
                    title="Understand The Background Of Bakery Now."
                    BlogCardImage={BlogCardImage3}
                    subCategory="Cake,"
                    category="Biscuits" />
            </div>
            <div className="footer " >
                <Footer
                    heading="Contact Us"
                    text1="Sector 75, Mohali, Punjab"
                    text2="+91 98765 43210"
                    text3="test@gmail.com"
                    PostHeading="Recent Posts"
                    PostImage={BlogCardImage3}
                    title="Understand The Background Of Bakery Now."
                    QuickLink={"Quick Links"}
                    Opening={"Opening Hours"}
                />
            </div>
        </>
    )
}

export default Home