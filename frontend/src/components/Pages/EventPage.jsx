import React from 'react';
import Heading2 from '../utils/Heading2';
import LinkButton from '../utils/LinkButton';
import map from '../../assets/map.png'
import venue from '../../assets/Sathyabama.png'
import poster from '../../assets/posters/dummy.jpeg'
import Badge from '../utils/Badge';

function Events() {
    return (
        <div className='flex flex-col px-10 py-20'>
            <div className='flex flex-col'>
                <Heading2 text={"Dummy Event"}></Heading2>
                <p className='text lg mt-2 mb-5 text-justify'>
                    Desc -  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non augue nisl. Duis quis posuere nunc, sit amet iaculis massa. Fusce lorem risus, euismod vitae dui sed, dignissim ultricies lorem. In tellus ligula, sodales vitae pulvinar non Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non augue nisl. Duis quis posuere nunc, sit amet iaculis massa. Fusce lorem risus, euismod vitae dui sed, dignissim ultricies lorem. In tellus ligula, sodales vitae pulvinar non
                </p>
            </div>
            <div className='flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-10'>
                <div>
                    <img src={poster} />
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col md:flex-row w-full gap-3 md:gap-4 md:col-span-3 md:justify-between'>
                        <div>
                            <Badge text='September 11th, 2024' className='p-5 md:p-10'></Badge>
                        </div>
                        <div>
                            <Badge text='9:30 am to 3:00 pm' className='p-5 md:p-10'></Badge>
                        </div>
                        <div>
                            <Badge text='IRC Second floor' className='p-10'></Badge>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 md:col-span-7'>
                        <div>
                            <img src={venue} />
                        </div>
                        <div className='w-full'>
                            <img src={map} className='object-cover w-full h-auto' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <LinkButton text={"Register"} link={'/event/registration'}></LinkButton>
                </div>
            </div>
        </div>
    )
}

export default Events