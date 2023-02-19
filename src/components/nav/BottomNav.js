import { faFacebookF, faInstagram, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlackButton from '../buttons/BlackButton'

const BottomNav = () => {
    const navigate = useNavigate()
  return (
    <div className='text-center'>
        <p className='uppercase text-3xl mb-7'>if you don't have a sprouts in your area, you can always order directly from our website!</p>
        <BlackButton handleClick={()=>navigate("/two")}  text={"Shop Now"}/>
        <div className="border-t border-gray-800 lg:mx-64 md:mx-40 sm:mx-12 mx-8 mb-10"></div>
        <p className='uppercase  font-bold text-lg mb-5'>follow us</p>
        <div className='flex gap-5 justify-center mb-10 '>
            <FontAwesomeIcon icon={faTwitter}/>
            <FontAwesomeIcon icon={faYoutube}/>
            <FontAwesomeIcon icon={faFacebookF}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faTiktok}/>
        </div>
        <p className='text-gray-300 text-sm '>if you prefer no to receive emails like this, you may <span className='text-gray-300 underline cursor-pointer'>unsubscribe</span></p>
        <p className='text-gray-300 text-sm mb-5'>&#169; sprout. all rights reserved</p>
        <p className='uppercase mb-20'>sprout</p>
    </div>
  )
}

export default BottomNav