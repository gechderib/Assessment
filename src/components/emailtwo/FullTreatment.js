import React from 'react'
import "./fullTreatment.css"
const FullTreatment = () => {
  return (
    <div className='fullTreatment w-full relative'>
        <div className='hidden lg:block absolute bottom-4 lg:ml-96 lg:left-32'><img className='w-full' src={require("../../assets/images/abstract-3.png")} alt='this'/></div>
        <div className='absolute md:top-32'><img className='w-full' src={require("../../assets/images/image-5.png")} alt='this'/></div>
        <div className='absolute top-56 lg:ml-96 lg:left-44 ml-10'>
            <p className='text-white mt-24 mb-16'>2. For A Full Treatment</p>
            <p className='text-white ml-10 text-sm md:text-gray-400 text-white w-1/2'>After washing your hair with the Universal Hydrating Shampoo, rinse it out thoroughly. Then, simply add a pea-sized dollop or two of your chosen booster to the Universal Hydrating Conditioner instead. Proceed with rinsing, and your locks will be revitalized.</p>
        </div>
        <div className='hidden lg:block absolute right-0 bottom-5'><img className='w-full' src={require("../../assets/images/vector-4.png")} alt='this'/></div>
        <div className='hidden lg:block absolute right-0 top-64'><img className='w-full' src={require("../../assets/images/image-6.png")} alt='this'/></div>
        <div className='hidden lg:block absolute -bottom-10 right-16'><img className='w-full' src={require("../../assets/images/image-7.png")} alt='this'/></div>
    </div>
  )
}

export default FullTreatment