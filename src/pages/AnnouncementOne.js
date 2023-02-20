import React from 'react'
import BlackButton from '../components/buttons/BlackButton'
import CareProducts from '../components/emailone/CareProducts'
import Wow from '../components/emailone/Wow'
import BottomNav from '../components/nav/BottomNav'
import SproutsNav from '../components/nav/SproutsNav'
import NearBy from '../components/emailone/NearBy'
import Products from '../components/emailone/Products'
import Sale from '../components/emailone/Sale'
import TrustR from '../components/emailone/TrustR'
import Video from '../components/emailone/Video'
import "./AnnouncementOnce.css"
import Top from '../components/emailone/Top'
const AnnouncementOne = () => {
  return (
    <div className='manColor'>
        <SproutsNav/>
        <CareProducts/>
        <Sale/>
        <Products/>
        <NearBy/>
        <Top/>
        <TrustR leftText={false} text="Universal Hydrating shampoo"/>
        <TrustR leftText={true} text="Universal Hydrating Conditioner"/>
        <TrustR leftText={false} text="scalp's bff booster"/>
        <TrustR leftText={true} text="frizz fighter booster"/>
        <BlackButton text="Visit Store For More"/>
        <Video/>
        <BottomNav/>
        <Wow/>
    </div>
  )
}

export default AnnouncementOne