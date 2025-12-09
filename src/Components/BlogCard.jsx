import React from 'react'
export default function BlogCard({ BlogCardImage, title, subCategory, category }) {
    return (
        <div className="blogcard justify-center items-center flex flex-col gap-4 text-gray-700  hover:text-cyan-400">
            {BlogCardImage && <img src={BlogCardImage} alt="logo" className='image object-cover object-center rounded' />}
            <h3 className='text-2xl  font-[900] top-0 rounded px-3 py-2 flex items-center justify-center  '>{title}</h3>
            <div className="bottom-text flex items-center justify-between mt-2 w-full px-3 ">
                <i className="fa-solid fa-folder  "></i>
                <div className="categories flex items-center justify-center foont-[500] text-lg ">
                    <span className='text-gray-600 ml-2 '>{subCategory}</span>
                    <span className='text-gray-600 ml-4 '> {category}</span>
                </div>
            </div>
        </div>
    )
}