import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='w-[256px]   bg-white h-screen shadow-lg flex flex-col items-center justify-center p-4 gap-5 fixed'>
            <Image
            className='rounded-full'
                src="/tan-images.jpeg"
                height={200}
                width={200}
                alt="Tan profile images"
            />
            <h4 className='text-lg text-sky-700 text-center uppercase hover:underline'>
                <a href={"https://www.linkedin.com/in/warut-wattanakijrungroj/"}>Warut (Tan) <br /> Wattanakijrungroj </a>
            </h4>
            <p className='text-xl cursor-pointer hover:underline'>itanprscritical@gmail.com</p>
            <ul className='text-center flex flex-col gap-y-4 uppercase text-neutral-500 hover:[&>li]:text-neutral-900 cursor-pointer'>
                <li>About</li>
                <li>Experiences</li>
                <li>Compentencies</li>
                <li>Portfolio</li>
                <li>Education</li>
            </ul>

        </div>
    )
}

export default Sidebar