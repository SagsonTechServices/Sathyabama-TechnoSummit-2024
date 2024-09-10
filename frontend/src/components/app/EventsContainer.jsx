import React from 'react'
import DeskCard from '../utils/DeskCard'
import Heading2 from '../utils/Heading2'

function EventsContainer() {
  return (
    <div className='container max-w-screen-2xl md:px-20 px-5 my-10'>
        <Heading2 text={"TechnoSummit Events"}></Heading2>

        <div className='container max-w-screen-2xl md:px-20 px-5 my-5'>
            <DeskCard></DeskCard>
        </div>
    </div>
  )
}

export default EventsContainer
