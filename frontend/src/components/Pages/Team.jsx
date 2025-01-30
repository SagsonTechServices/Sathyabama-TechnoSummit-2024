import React from 'react'
import PatronCard from '../utils/PatronCard';
import founder from '../../assets/abrars.jpeg';
import coFounder from '../../assets/sunders.jpeg';
import manager from '../../assets/surajs.jpeg';

function Team() {
  return (
    <div className='my-32 container max-w-screen-2xl lg:px-20 px-3'>
      <h1 className='text-2xl font-bold text-primary'><span className='text-white'><span className='text-4xl'>T</span>eam - </span><span className='text-4xl'>S</span>agsonTech</h1>

      <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-8 my-10 px-10'>
        <PatronCard name={"Syed Abrar Ahmed G"} designation={"Founder"} image={founder} alt={"founder"} ></PatronCard>

        <PatronCard name={"Sunderesan M"} designation={"Co Founder"} image={coFounder} alt={"coFounder"} ></PatronCard>

        <PatronCard name={"Suraj K P"} designation={"Manager"} image={manager} alt={"manager"} ></PatronCard>
      </div>
    </div>
  )
}

export default Team