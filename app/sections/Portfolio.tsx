import React from 'react'
import Image from 'next/image'
const Portfolio = () => {
    return (
        <div className='bg-white w-full  p-12'>
            <h1 className='uppercase text-2xl tet mb-10'>Portfolio</h1>
            <div className='flex gap-5 mb-10'>
                <div >
                    <Image
                        src="/covid-map.png"
                        height={350}
                        width={350}
                        alt="Tan profile images"
                    />
                </div>
                <div >
                    <h1 className='text-xl mb-3'>COVID-19 Map</h1>
                    <p>Visualising COVID-19 cases using OpenStreetMap
                        The data is based on coronavirus-tracker-api</p>
                    <p className='text-sm mt-3'>
                        Utilised: React, Context API, Hooks API, Sass, AWS S3</p>
                </div>
            </div>
            <div className='flex gap-5 mb-10'>
                <div >
                    <Image
                        src="/covid-map.png"
                        height={350}
                        width={350}
                        alt="Tan profile images"
                    />
                </div>
                <div >
                    <h1 className='text-xl mb-3'>COVID-19 Map</h1>
                    <p>Visualising COVID-19 cases using OpenStreetMap
                        The data is based on coronavirus-tracker-api</p>
                    <p className='text-sm mt-3'>
                        Utilised: React, Context API, Hooks API, Sass, AWS S3</p>
                </div>
            </div>
            <div className='flex gap-5 mb-10'>
                <div >
                    <Image
                        src="/covid-map.png"
                        height={350}
                        width={350}
                        alt="Tan profile images"
                    />
                </div>
                <div >
                    <h1 className='text-xl mb-3'>COVID-19 Map</h1>
                    <p>Visualising COVID-19 cases using OpenStreetMap
                        The data is based on coronavirus-tracker-api</p>
                    <p className='text-sm mt-3'>
                        Utilised: React, Context API, Hooks API, Sass, AWS S3</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio