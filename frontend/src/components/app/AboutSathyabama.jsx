import React from 'react'
import sathyabama from "../../assets/Sathyabama.png"
import Heading2 from '../utils/Heading2'

function AboutSathyabama() {
  return (
    <div className='container max-w-screen-2xl md:px-20 px-5 my-10'>

        <div className='grid md:grid-cols-2 grid-cols-1 my-5'>
            <div className='md:px-10 md:block hidden'>
            <Heading2 text={"About Sathyabama"}></Heading2>

                <p className='md:text-lg my-3'>Sathyabama is a prestigious institution which excels in the fields of Engineering, Science and Technology for more than three successful decades. It offers multi-disciplinary academic programmes in various fields of Engineering, Science, Technology, law, Dental Science, Pharmacy, Nursing, Management, Arts and Science and Allied Health Sciences. It is established under Sec.3 of UGC Act, 1956 and is been Accredited with 'A++' Grade by the National Accreditation and Assessment council. <br />
                The Institution persistently seeks and adopts innovative methods to improve the quality of higher education and is responsive to the changes taking place in the field of education on a global scale. The Institution has a team of dynamic and outstanding faculty, innovative pedagogical practices , state of the art infrastructure and world class Research Facilities. This glorious Institution is functioning under the dynamic leadership of Dr. Mariazeena Johnson, Chancellor, Dr. Marie Johnson, President, Mr. J. Arul Selvan Vice President, Ms. Maria Bernadette Tamilarasi, Vice President and Ms.Maria Catherin Johnson, Vice President.</p>
            </div>

            <img src={sathyabama} className='md:block hidden' alt="Sathyabama" />

            <div className='md:px-10 md:hidden'>
            <Heading2 text={"About Sathyabama"}></Heading2>

            <img src={sathyabama} className='mt-5' alt="Sathyabama" />

            <p className='md:text-lg my-3'>Sathyabama is a prestigious institution which excels in the fields of Engineering, Science and Technology for more than three successful decades. It offers multi-disciplinary academic programmes in various fields of Engineering, Science, Technology, law, Dental Science, Pharmacy, Nursing, Management, Arts and Science and Allied Health Sciences. It is established under Sec.3 of UGC Act, 1956 and is been Accredited with 'A++' Grade by the National Accreditation and Assessment council. <br />
            The Institution persistently seeks and adopts innovative methods to improve the quality of higher education and is responsive to the changes taking place in the field of education on a global scale. The Institution has a team of dynamic and outstanding faculty, innovative pedagogical practices , state of the art infrastructure and world class Research Facilities. This glorious Institution is functioning under the dynamic leadership of Dr. Mariazeena Johnson, Chancellor, Dr. Marie Johnson, President, Mr. J. Arul Selvan Vice President, Ms. Maria Bernadette Tamilarasi, Vice President and Ms.Maria Catherin Jayapriya, Vice President.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutSathyabama
