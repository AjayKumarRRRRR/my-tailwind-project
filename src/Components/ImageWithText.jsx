import React from 'react'
import ImageText from './Images/imagewithtext.jpg'
import Icon1 from './Images/icon1.png'




// export default function ImageWithText() {
//   return (
//    <div className='offer flex flex items-center justify-center bg-cyan-300 my-20 gap-6'>
//         <div className="image w-1/2 mx-auto">
//             <img src={ImageText} alt="" />
//         </div>
//         <div className="text text-center mt-4 bg-cyan-300 py-10 px-10 rounded-lg w-1/2 mx-auto flex flex-col items-center justify-center gap-5">
//             <h2 className='text-5xl font-bold text-slate-900'>Limited Time Offer</h2>
//             <p className='text-slate-600 text-xl font-[500] '>Wedding Cake Sale !</p>
//             <div className="icon flex items-center justify-center">
//                 <img src={Icon1} alt="cookie"/>
//             </div>
//             <p className='text-slate-700 text-md font-[400] '> 
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//             </p>
//             <button className=' bg-gray-700 text-white text-xl py-3 px-10 rounded-lg hover:bg-gray-500 transition duration-300'>
//             Get Now
//             </button>
//         </div>
//     </div>
//   );
// }

export default function ImageWithText({heading, subheading, icon, description, buttonText}) {
  return (
   <div className='offer flex flex items-center justify-center bg-cyan-300 my-20 gap-6'>
        <div className="image w-1/2 mx-auto ">
         {ImageText && <img src={ImageText} alt=""/>}
        </div>
        <div className="text text-center bg-cyan-300 px-10 rounded-lg w-1/2 mx-auto flex flex-col items-center justify-center gap-5">
            {heading && <h2 className='text-5xl font-bold text-slate-900'>{heading}</h2>}
            {subheading && <p className='text-slate-600 text-xl font-[500]'>{subheading}</p>}
            <div className=" experience-card icon flex items-center justify-center text-red-500 bg-[#374151] rounded-[69px] p-[25px] border-4 border-white">
                <img src={Icon1} alt="cookie" />
            </div>
            <p className='text-slate-700 text-md font-[400] '> 
                {description}
            </p>
            <button className=' bg-gray-700 text-white text-xl py-3 px-10 rounded-lg hover:bg-gray-500 transition duration-300'>
            {buttonText || 'Get Now'}
            </button>
        </div>
    </div>
  );
}