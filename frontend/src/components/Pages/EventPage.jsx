import React from 'react';
import Heading2 from '../utils/Heading2';
import AppButton from '../utils/AppButton'
import Badge from '../utils/Badge';
import eventsData from '../../../data/eventData';
import { useParams } from 'react-router-dom';

function Events() {
    const { eventId } = useParams();
    const eventData = eventsData.find(event => event.id === parseInt(eventId));

    if (!eventData) return <h1>Loading...</h1>;

    return (
        <div className='flex flex-col px-10 pt-20 pb-10 md:grid md:grid-cols-10 md:gap-4'>
            <div className='col-span-4 md:sticky md:top-0 self-start'>
                <div className='flex flex-col md:hidden'>
                    <Heading2 text={`${eventData.details.name}`} />
                    <span>
                        <div className="badge mt-2 badge-warning md:text-lg py-3 rounded-md">
                            {`${eventData.details.feeDetails}`}
                        </div>
                    </span>
                    <p className='md:text-lg mt-2 mb-5 text-justify'>
                        {eventData.details.desc}
                    </p>
                </div>
                <img src={eventData.details.poster} alt="Event Poster" className='rounded-md' />
                <div className='md:flex mt-5 justify-center hidden'>
                    <AppButton btnText={"Register"} link={`/event/registration/${eventData.id}`} />
                </div>
            </div>

            <div className='col-span-6 overflow-auto'>
                <div className='md:flex flex-col hidden'>
                    <Heading2 text={`${eventData.details.name}`} />
                    <span>
                        <div className="badge mt-2 badge-warning text-lg py-3">
                            {`${eventData.details.feeDetails}`}
                        </div>
                    </span>
                    <p className='text-lg mt-2 mb-5 text-justify'>
                        {eventData.details.desc}
                    </p>
                </div>

                <div className='flex flex-col md:grid grid-cols-10 my-8 md:my-0 md:mb-8 gap-5'>
                    <div className='flex flex-col w-full col-span-3 gap-5 md:justify-between'>
                        <Badge text={`Date: ${eventData.details.date}`} className='p-5 md:p-10' />
                        <Badge text={`Time: ${eventData.details.time}`} className='py-10 px-5 md:py-12' />
                        <Badge text={`Venue: ${eventData.details.venue}`} className='py-12 px-5' />
                    </div>

                    <div className='flex col-span-7'>
                        <img src={eventData.details.venueImg} alt="Venue" />
                    </div>
                </div>
                <div className='w-full'>
                    <img src={eventData.details.mapSS} alt="Map" />
                </div>
                <div className='flex mt-5 justify-center md:hidden'>
                    <AppButton btnText={"Register"} link={`/event/registration/${eventData.id}`} />
                </div>
            </div>
        </div>
    );
}

export default Events;