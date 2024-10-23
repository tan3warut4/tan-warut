import React from 'react'

const Competencies = () => {
    return (
        <div className='bg-white w-full  p-12'>
            <h1 className='uppercase text-2xl  py-6'>Competencies</h1>
            <p className='text-lg text-slate-500 tracking-wider'>Programming Languages & Tools</p>
            <ul className='list-disc ml-6 mt-5'>
                <li>JavaScript, TypeScript</li>
                <li>NodeJs, RestAPI</li>
                <li>React, Redux, Mobx</li>
                <li>GraphQL</li>
            </ul>
        </div>
    )
}

export default Competencies
