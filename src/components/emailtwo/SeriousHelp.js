import React from 'react'
import BlackButton from '../buttons/BlackButton'
import "./seriousHelp.css"

const SeriousHelp = () => {
  return (
    <div className='seriosHelp flex flex-col '>
        <div className='self-center'><p className='text-5xl mt-24 mb-10'>3. For Some Serious Help</p></div>
        <div className='grid grid-cols-3 md:mx-52 ml-4 gap-2'>
            <div className='col-span-1'>
                <img src={require("../../assets/images/image-8.png")} alt='this'/>
                <p className='text-3xl mt-5'>Cut.</p>
            </div>
            <div className='col-span-1 mt-10'>
                <p className='text-3xl mb-5'>Color.</p>
                <img src={require("../../assets/images/image-9.png")} alt='this'/>
            </div>
            <div className='col-span-1 mt-16'>
                <img src={require("../../assets/images/image-10.png")} alt='this'/>
                <p className='text-3xl mt-5'>Design.</p>
            </div>
        </div>
        <div className='md:grid md:grid-cols-2 ml-16 mr-16 mb-10'>
            <div className='col-span-1 text-end'>
                <p className='text-sm'>For those who need some serious help with their hair, simply rub a pea-sized dollop of your chosen booster to your hair after you have finished your normal shower routine. Rub the booster between your palms and apply to damp, towel-dried hair. Style as usual. The amount needed may vary depending on your hair length and fullness</p><br/>
                <p className='text-sm'>PSA: If you are struggling with more than one hair care problem, you can go crazy and create your own personal blend by mix-matching the boosters of your choice!</p>
            </div>
            <div className='col-span-1'></div>
        </div>
        <div>
            <BlackButton text={"SHOP NOW"}/>
        </div>
    </div>
  )
}

export default SeriousHelp