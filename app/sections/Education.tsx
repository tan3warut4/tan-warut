import React from 'react'

const Education = () => {
    return (
        <div className='bg-white w-full  p-12'>
            <h1 className='uppercase text-2xl mb-5'>Education</h1>
            <div className='flex justify-between mb-5'>
                <div>
                    <h1 className='text-xl uppercase'>
                        King Mongkut's Institute of Technology Ladkrabang, THAILAND</h1>
                    <p>Computer Science</p>
                    <p className='mt-5'>WAM: 76.37 | Distinction Average</p>
                </div>
                <div>MAY 2011 - JUL 2015</div>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-xl'>University of new south wales</h1>
                    <p>Master of Commerce | Business Analytics</p>
                    <p className='mt-5'>WAM: 76.37 | Distinction Average</p>
                </div>
                <div>FEB 2018 - DEC 2019</div>
            </div>
        </div >
    )
}

export default Education