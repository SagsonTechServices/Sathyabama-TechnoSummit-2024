import React from 'react'
import DeskCard from '../utils/DeskCard'
import venue from '../../assets/Sathyabama.png'
import VenueCard from '../utils/VenueCard'

function VenueContainer() {
  return (
    <div className='container max-w-screen-2xl md:px-20 px-5 my-32 md:grid-cols-4 gap-10 grid-cols-1 grid'>
        <VenueCard image={venue} title={"Hackathons and Makathons"} venue={"International Research Center(IRC Block)"} id={"hackathon"}></VenueCard>
    </div>
  )
}

export default VenueContainer
