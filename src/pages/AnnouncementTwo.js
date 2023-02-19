import React from 'react'
import CareProducts from '../components/CareProducts'
import BottomNav from '../components/nav/BottomNav'
import SproutsNav from '../components/nav/SproutsNav'
import Video from '../components/Video'

const AnnouncementTwo = () => {
  return (
    <div>
        <SproutsNav/>
        <CareProducts leftText={true}/>

        <Video/>
        <BottomNav/>
    </div>
  )
}

export default AnnouncementTwo