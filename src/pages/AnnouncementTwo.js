import React from 'react'
import CareProducts from '../components/emailone/CareProducts'
import FullTreatment from '../components/emailtwo/FullTreatment'
import LittelHelp from '../components/emailtwo/LittelHelp'
import OurHairCare from '../components/emailtwo/OurHairCare'
import SeriousHelp from '../components/emailtwo/SeriousHelp'
import WhatSetTrustx from '../components/emailtwo/WhatSetTrustx'
import BottomNav from '../components/nav/BottomNav'
import SproutsNav from '../components/nav/SproutsNav'
import Video from '../components/emailone/Video'
import "./AnnouncementOnce.css"
const AnnouncementTwo = () => {
  return (
    <div className='manColor'>
        <SproutsNav/>
        <CareProducts leftText={true}/>
        <OurHairCare/>
        <WhatSetTrustx/>
        <LittelHelp/>
        <FullTreatment/>
        <SeriousHelp/>
        <Video/>
        <BottomNav isEmail2={true}/>
    </div>
  )
}

export default AnnouncementTwo