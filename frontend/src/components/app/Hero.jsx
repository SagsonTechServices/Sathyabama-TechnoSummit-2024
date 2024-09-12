import React from 'react';
import heroImage from '../../assets/virtual.png';
import Heading1 from '../utils/Heading1';
import LinkButton from '../utils/LinkButton';

function Hero() {
  return (
    <div className='bg-base-200 mt-16 w-100 shadow-lg border-primary container max-w-screen-2xl md:px-20 px-5 py-10 grid md:grid-cols-2 grid-cols-1' id='heroSection'>
      <div className='heroText'>
        <Heading1 text={"TechnoSummit 2024"}></Heading1>

        <p className='w-full md:text-lg mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, nemo laboriosam tenetur iusto sit fugit soluta recusandae? Culpa harum molestias tenetur esse enim sed repudiandae commodi voluptas, veritatis deleniti, porro, repellendus asperiores? Ea laborum necessitatibus dolores! Obcaecati non magni, doloribus reprehenderit voluptates quae corporis, laborum atque vitae officiis aut eius! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure magni eos amet qui dicta ex voluptate quos eligendi maiores laborum.</p>

        <LinkButton text={"Rules and Regulations"} link = {"/rules"} classes={"my-5 md:mx-10 mx-auto w-48"}></LinkButton>

      </div>

      <img src={heroImage} className='md:w-96 w-56 mx-auto' alt="Hero Image" id='heroImage'/>
    </div>
  )
}

export default Hero
