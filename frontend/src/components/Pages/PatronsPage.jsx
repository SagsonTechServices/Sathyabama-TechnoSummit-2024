import React from 'react'
import PatronCard from '../utils/PatronCard'

function PatronsPage() {
	return (
		<div className='container justify-center max-w-screen-2xl md:px-20 px-5 my-32 grid gap-10 grid-cols-1'>
			<div className='flex flex-col md:flex-row gap-10 md:gap-0'>
				<PatronCard name={"Dr. Mariazeena Johnson"} designation={"Chancellor"} image={"../src/assets/patrons/chancellor.jpg"} alt={"Chancellor"} className={'md:mr-16'}></PatronCard>
				<PatronCard name={"Dr. Marie Johnson"} designation={"President"} image={"../src/assets/patrons/president.jpg"} alt={"President"} className={'md:ml-16'}></PatronCard>
			</div>
			<div className='flex flex-col md:flex-row gap-10 md:gap-0'>
				<PatronCard name={"Ms. Maria Bernadette Tamilarasi"} designation={"Vice President"} image={"../src/assets/patrons/vp-1.jpeg"} alt={"Vice-President"}></PatronCard>
				<PatronCard name={"Mr. J. Arul Selvan"} designation={"Vice President"} image={"../src/assets/patrons/VP-2.jpeg"} alt={"Vice-President"}></PatronCard>
				<PatronCard name={"Ms. Maria Catherine Johnson"} designation={"Vice-President"} image={"../src/assets/patrons/vice-president.jpg"} alt={"Vice-President"}></PatronCard>
			</div>
		</div>
	)
}

export default PatronsPage