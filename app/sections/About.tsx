import { FaLinkedin, FaGithub } from "react-icons/fa";

import React from 'react'
const About = () => {
    return (
        <>
            <section className='h-screen flex justify-center flex-col  gap-5 text-white p-12'>
                <p className='text-6xl font-extrabold text-white'><span className='text-gray-400'>hello,</span> <br /> I&apos;m Tan </p>
                <p className='text-yellow-600'>aka WARUT WATTANAKIJRUNGROJ</p>
                <p className='text-2xl'>Software Engineer</p>
                <p className='text-xl  tracking-wider leading-loose'>I’m passionate about learning and enjoy tackling tough challenges that let me show what I can do and growing up my skills<span className='cursor'>_</span></p>
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
            </section>
        </>

    )
}

export default About