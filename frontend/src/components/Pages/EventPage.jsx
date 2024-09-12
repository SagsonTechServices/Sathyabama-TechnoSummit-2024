import React from 'react';
import Heading2 from '../utils/Heading2';
import LinkButton from '../utils/LinkButton';
import Badge from '../utils/Badge';
import eventsData from '../../../data/eventData'
import { useParams } from 'react-router-dom';

function Events() {
    const {eventId} = useParams();
    const eventData = eventsData.find(event => event.id === parseInt(eventId));

    if(!eventData) return <h1>Loading...</h1>

    return (
        <div className='flex flex-col px-5 py-20 container max-w-screen-2xl md:px-20 mt-10'>
            <div className='flex flex-col'>
                <Heading2 text={eventData.details.name}></Heading2>
                <p className='text lg mt-2 mb-5 text-justify'>
                    {eventData.details.desc}
                </p>
            </div>
            <div className='flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-10'>
                <div>
                    <img src={eventData.details.poster} />
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col md:flex-row w-full gap-3 md:gap-4 md:col-span-3 md:justify-between'>
                        <div>
                            <Badge text={eventData.details.date} className='p-5 md:p-10'></Badge>
                        </div>
                        <div>
                            <Badge text={eventData.details.time} className='p-5 md:p-10'></Badge>
                        </div>
                        <div>
                            <Badge text={eventData.details.venue} className='p-10'></Badge>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 md:col-span-7'>
                        <div>
                            <img src={eventData.details.venueImg} />
                        </div>
                        <div className='w-full'>
                            <img src={eventData.details.mapSS} className='object-cover w-full h-auto' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <LinkButton text={"Register"} link={`/event/registration/${eventData.id}`}></LinkButton>
                </div>
            </div>
        </div>
    )
}

export default Events