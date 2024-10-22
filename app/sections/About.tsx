import { FaLinkedin, FaGithub } from "react-icons/fa";

import React from 'react'
const About = () => {
    return (
        <>
            <div className='h-screen flex justify-center flex-col px-12 gap-5 text-white'>
                <p className='text-6xl font-extrabold text-white'><span className='text-gray-400'>hello,</span> <br /> I&apos;m Tan </p>
                <p className='text-yellow-600'>aka WARUT WATTANAKIJRUNGROJ</p>
                <p className='text-2xl'>Software Engineer</p>
                <p className='text-xl  tracking-wider'>I’m passionate about learning and enjoy tackling tough challenges that let me show what I can do and grow my skills<span className='cursor'>_</span></p>
                <ul className='flex gap-4 text-4xl hover:[&>li]:cursor-pointer'>
                    <li >
                        <a href="https://www.linkedin.com/in/warut-wattanakijrungroj/">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/tan3warut4">
                            <FaGithub />
                        </a>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default About