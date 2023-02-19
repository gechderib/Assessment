import React from 'react'
import BlackButton from '../components/buttons/BlackButton'
import CareProducts from '../components/CareProducts'
import BottomNav from '../components/nav/BottomNav'
import SproutsNav from '../components/nav/SproutsNav'
import NearBy from '../components/NearBy'
import Products from '../components/Products'
import Sale from '../components/Sale'
import Top from '../components/Top'
import TrustR from '../components/TrustR'
import Video from '../components/Video'

const AnnouncementOne = () => {
  return (
    <div>
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
    </div>
  )
}

export default AnnouncementOne