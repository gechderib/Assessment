import React from 'react'
import "./whatSetTrust.css"
const WhatSetTrustx = () => {
  return (
    <div className='mx-10 relative flex flex-col'>
        <div className='relative whatSetTrust self-center'>
          <div className='absolute top-0 left-1/2'><img src={require("../../assets/images/abstract-1.png")} alt='this'/></div>
          <div className='absolute top-2/3 left-1/2'><img src={require("../../assets/images/abstract-2.png")} alt='this'/></div>
          <div className='absolute top-2/3'><img src={require("../../assets/images/vector-1.png")} alt='this'/></div>
        
          <div className='absolute left-16 top-32'><img src={require("../../assets/images/image-1.png")} alt='this'/></div>
          <div className='absolute left-2/3 top-16'><img src={require("../../assets/images/image-2.png")} alt='this'/></div>
          
        </div>

        <div className='md:absolute md:w-1/3 md:top-64 md:left-16 text-2xl mt-5 mb-5'><p>What sets TrustRX apart from other hair care lines? Well, our unique formulas help you mitigate the problems you deal with most.</p></div>
        <div className='md:absolute md:w-1/3 md:bottom-80 md:right-8 text-sm mb-5'><p>Whether you can’t handle the frizz, tame the curls, or simply want more voluminous strands, we have boosters that do the work for you! And, you have the freedom to use as much as you want, when you want, and how you want.</p></div> 
    </div>
  )
}

export default WhatSetTrustx