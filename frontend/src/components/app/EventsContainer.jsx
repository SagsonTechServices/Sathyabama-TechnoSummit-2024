import React from 'react'
import DeskCard from '../utils/DeskCard'
import Heading2 from '../utils/Heading2'
import dummyPoster from '../../assets/posters/dummy.jpeg';

function EventsContainer() {
    const events = {
        dummy : {
            title : "Dummy Event",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, nemo laboriosam tenetur iusto sit fugit soluta recusandae? Culpa harum molestias tenetur esse enim sed repudiandae commodi voluptas, veritatis deleniti, porro, repellendus asperiores? Ea laborum necessitatibus dolores! Obcaecati non magni, doloribus reprehenderit voluptates quae corporis, laborum atque vitae officiis aut eius! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure magni eos amet qui dicta ex voluptate quos eligendi maiores laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, nemo laboriosam tenetur iusto sit fugit soluta recusandae? Culpa harum molestias tenetur esse enim sed repudiandae commodi voluptas, veritatis deleniti, porro, repellendus asperiores? Ea laborum necessitatibus dolores!",
            link : "/event/dummy",
            poster : dummyPoster,
        }
    }

  return (
    <div className='container max-w-screen-2xl md:px-20 px-5 my-14'>
        <Heading2 text={"TechnoSummit Events"}></Heading2>

        <div className='container max-w-screen-2xl md:px-20 px-5 my-5 grid grid-cols-1 gap-10'>
            <DeskCard poster={events.dummy.poster} title={events.dummy.title} desc={events.dummy.desc} link={events.dummy.link}></DeskCard>
            <DeskCard poster={events.dummy.poster} title={events.dummy.title} desc={events.dummy.desc} link={events.dummy.link}></DeskCard>
            <DeskCard poster={events.dummy.poster} title={events.dummy.title} desc={events.dummy.desc} link={events.dummy.link}></DeskCard>
            <DeskCard poster={events.dummy.poster} title={events.dummy.title} desc={events.dummy.desc} link={events.dummy.link}></DeskCard>
        </div>
    </div>
  )
}

export default EventsContainer
