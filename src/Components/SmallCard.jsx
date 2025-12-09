import React from 'react'
import SmallCard0 from './Images/smallcard.jpg'

export default function SmallCard({ SmallCardImage, title }) {
    return (
        
                <div className="smlcard relative  justify-center items-center flex flex-row gap-4">
                    {SmallCardImage && <img src={SmallCardImage } alt="logo" className='image' />}
                    <h3 className='text-xl  font-[900] absolute top-0 rounded bg-cyan-400 px-3 py-2 opacity-0  flex items-center justify-center '>{ title }</h3>
                </div>

    )
}
