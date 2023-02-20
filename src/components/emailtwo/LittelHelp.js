import React from 'react'

const LittelHelp = () => {
  return (
    <div className='md:grid md:grid-cols-3 md:ml-44 ml-10 mr-10 mb-10'>
        <div className='col-span-1'><img className='w-full' src={require("../../assets/images/image-3.png")} alt={"this"}/></div>
        <div className='col-span-1 md:mt-60 mt-5 md:mx-10'>
            <p className='mb-3'>1. For A Little Help</p>
            <p className='text-sm'>Simply add a pea-sized dollop or two of your chosen booster to the Universal Hydrating Shampoo and work it into your strands, then rinse it out and follow up with our Universal Hydrating Conditioner.</p>
        </div>
        <div className='col-span-1 md:mt-60 mt-5'>
            
            <img className='w-full' src={require("../../assets/images/image-4.png")} alt={"this"}/></div>
    </div>
  )
}

export default LittelHelp