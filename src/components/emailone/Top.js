import React from 'react'
import "./Top.css"
const Top = () => {
  return (
    <div className='mx-10 mb-10'>
        <div className='lg:grid lg:grid-cols-6 gap-24 mb-16'>
            <div className='col-span-4 text-5xl'>
                <p className='product'>*Not only can you order our plant-based hair care products online, but now you can find them in a Sprouts location near you!</p>
                <br/>
                <p className='product'>We are working hard to line the shelves with our products so that our customers can kiss those bad hair days goodbye, once and for all.</p>
            </div>
            <div className='col-span-2 mt-5'>
                <img className='w-full h-full img3' src={require('../../assets/images/img3.png')} alt="this"/>
            </div>
        </div>
        <div className='flex justify-start'>
            <div className='myTop p-10 rounded-full mr-10 self-center'><p className='-rotate-45 text-white text-3xl self-center'>Top</p></div>
            <div className='self-center'><p className='uppercase text-5xl'>find these must-have product in store</p></div>
        </div>
    </div>
  )
}

export default Top