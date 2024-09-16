import React from 'react'
import PatronCard from '../utils/PatronCard'

function PatronsPage() {
	return (
		<div className='container max-w-screen-2xl md:px-20 px-5 my-32 md:grid-cols-4 gap-10 grid-cols-1 grid'>
			<PatronCard name={"Dr. Mariazeena Johnson"} designation={"Chancellor"} image={"../src/assets/patrons/chancellor.jpg"} alt={"Chancellor"}></PatronCard>
			<PatronCard name={"Dr. Marie Johnson"} designation={"President"} image={"../src/assets/patrons/president.jpg"} alt={"President"}></PatronCard>
			<PatronCard name={"Ms. Maria Catherine Johnson"} designation={"Vice-President"} image={"../src/assets/patrons/vice-president.jpg"} alt={"Vice-President"}></PatronCard>
			<PatronCard name={"Dr. T.Sasipraba"} designation={"Vice Chancellor"} image={"../src/assets/patrons/vice-chancellor.png"} alt={"Vice-Chancellor"}></PatronCard>
		</div>
	)
}

export default PatronsPage