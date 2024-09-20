import React from 'react'
import Heading3 from '../utils/Heading3'

function Guidelines() {
	return (
		<div className='flex flex-col gap-3 px-10 md:px-32 my-20'>
			<div>
				<Heading3 text={"General Guidelines:"}></Heading3>
				<ol className='list-decimal px-5 md:px-10'>
					<li><p className='text-justify text-sm md:text-lg'>Students are requested to maintain general decorum.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>Student ID card is mandatory</p></li>
					<li><p className='text-justify text-sm md:text-lg'>No team or individual will be permitted without payment.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>There cannot be any changes after you submit the registration form.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>After the registration, you should pay the fees to the department incharge, else your registration will not be considered.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>The fee is 100 INR per member for each individual event except - Technical Paper Presentation.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>Students participating in hackathon are requested to submit approval letter from their parents to their respective departemnt coordinators.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>On Duty(OD) must be submitted only through the Department Coordinator</p></li>
				</ol>
			</div>
			<div>
				<Heading3 text={"Registration Instructions:"}></Heading3>
				<ol className='list-decimal px-5 md:px-10'>
					<li><p className='text-justify text-sm md:text-lg'>The registration process consists of two pages.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>The first page of registration is for the essential details for the Team and its leader, the team leader is also a member and the no. of members is inclusive of the team leader.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>The Second page of registration is for entering the team members' details</p></li>
					<li><p className='text-justify text-sm md:text-lg'>In case of individual registration please enter the team name as 'Individual'.</p></li>
					<li><p className='text-justify text-sm md:text-lg'>Please do check and verify all the details entered in the form before submitting.</p></li>
				</ol>
			</div>
		</div>
	)
}

export default Guidelines