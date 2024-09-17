import React from 'react'
import PatronCard from '../utils/PatronCard'
import chancellor from '../../assets/Patrons/chancellor.jpg'
import president from '../../assets/Patrons/president.jpg'
import vicePresident from '../../assets/Patrons/vice-president.jpg'

function PatronsPage() {
	return (
		<div className='container max-w-screen-2xl md:px-20 px-5 my-32 md:grid-rows-2 gap-10 grid-cols-1 grid'>
			<div className='flex'>
				<PatronCard name={"Dr. Mariazeena Johnson"} designation={"Chancellor"} image={chancellor} alt={"Chancellor"}></PatronCard>
				<PatronCard name={"Dr. Marie Johnson"} designation={"President"} image={president} alt={"President"}></PatronCard>
			</div>
			<div className='flex'>
			<PatronCard name={"Dr. Mariazeena Johnson"} designation={"Chancellor"} image={chancellor} alt={"Chancellor"}></PatronCard>
			<PatronCard name={"Dr. Marie Johnson"} designation={"President"} image={president} alt={"President"}></PatronCard>
			<PatronCard name={"Ms. Maria Catherine Johnson"} designation={"Vice-President"} image={vicePresident} alt={"Vice-President"}></PatronCard>
			</div>
		</div>
	)
}

export default PatronsPage