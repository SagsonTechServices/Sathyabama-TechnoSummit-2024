import React from 'react'
import sathyabama from "../../assets/Sathyabama.png"
import Heading2 from '../utils/Heading2'

function AboutSathyabama() {
  return (
    <div className='container max-w-screen-2xl md:px-20 px-5 my-10'>

        <div className='grid md:grid-cols-2 grid-cols-1 my-5'>
            <div className='md:px-10 md:block hidden'>
            <Heading2 text={"About Sathyabama"}></Heading2>

                <p className='md:text-lg my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, quo consequatur ducimus ipsam molestias omnis tempora nisi inventore pariatur recusandae. Molestias placeat dolorum ratione culpa molestiae. Inventore culpa quas debitis molestiae modi ullam repudiandae! Animi, deleniti. Voluptatum nulla consectetur labore amet, eos harum eius accusamus maiores dolor, rem dignissimos rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis soluta id ea asperiores tempora cupiditate aspernatur, vel numquam obcaecati ipsum, optio debitis, doloremque illo reprehenderit aliquid sint! Quibusdam eligendi eum, quod aliquid atque, sequi nisi nobis dicta accusantium vero officiis illum enim inventore ipsam, voluptates magnam? Officia voluptate possimus labore necessitatibus inventore repudiandae. Mollitia enim quae itaque tenetur blanditiis nesciunt voluptas id provident necessitatibus doloremque temporibus, vero aliquam consequuntur deleniti, exercitationem dolore optio debitis cum soluta? Inventore sint laborum enim corporis modi hic ex non, excepturi dolores dolorum! Cum reiciendis veritatis tempora sed. Quae commodi cupiditate distinctio in animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <img src={sathyabama} className='md:block hidden' alt="Sathyabama" />

            <div className='md:px-10 md:hidden'>
            <Heading2 text={"About Sathyabama"}></Heading2>

            <img src={sathyabama} className='mt-5' alt="Sathyabama" />

                <p className='md:text-lg my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, quo consequatur ducimus ipsam molestias omnis tempora nisi inventore pariatur recusandae. Molestias placeat dolorum ratione culpa molestiae. Inventore culpa quas debitis molestiae modi ullam repudiandae! Animi, deleniti. Voluptatum nulla consectetur labore amet, eos harum eius accusamus maiores dolor, rem dignissimos rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis soluta id ea asperiores tempora cupiditate aspernatur, vel numquam obcaecati ipsum, optio debitis, doloremque illo reprehenderit aliquid sint! Quibusdam eligendi eum, quod aliquid atque, sequi nisi nobis dicta accusantium vero officiis illum enim inventore ipsam, voluptates magnam? Officia voluptate possimus labore necessitatibus inventore repudiandae. Mollitia enim quae itaque tenetur blanditiis nesciunt voluptas id provident necessitatibus doloremque temporibus, vero aliquam consequuntur deleniti, exercitationem dolore optio debitis cum soluta? Inventore sint laborum enim corporis modi hic ex non, excepturi dolores dolorum! Cum reiciendis veritatis tempora sed. Quae commodi cupiditate distinctio in animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutSathyabama
