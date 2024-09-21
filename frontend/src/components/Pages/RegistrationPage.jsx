import React, { useState } from "react";
import InputField from "../utils/InputField";
import Heading1 from "../utils/Heading1";
import { useParams } from "react-router-dom";
import eventData from "../../../data/eventData";
import MemberForm from "../app/MemberForm";
import axios from "axios";
import LinkButton from '../utils/LinkButton'

function RegistrationPage() {
	const { eventId } = useParams();
	const event = eventData.find((event) => event.id === parseInt(eventId));
	const backendURL = import.meta.env.VITE_BACKEND_URL;


	// modalState 
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalData, setModalData] = useState({
		eventName: "",
		teamName: "",
		noOfMembers: 0,
		amount: 0
	});
	const [step, setStep] = useState(1); // Step tracking
	const [step1Data, setStep1Data] = useState({
		teamName: "",
		leaderEmail: "",
		leaderContact: "",
		dept: "department",
		numberOfMembers: event.details.min !== "n" ? event.details.min : 1,
	}); // State for step 1 data
	const [membersData, setMembersData] = useState([]); // State for members data
	const [errors, setErrors] = useState({});

	// Validation function
	function validateForm() {
		const newErrors = {};
		if (!/^[a-zA-Z\s]+$/.test(step1Data.teamName)) {
			newErrors.teamName = "Team name should only contain letters and spaces.";
		}
		if (!/^\S+@\S+\.\S+$/.test(step1Data.leaderEmail)) {
			newErrors.leaderEmail = "Enter a valid email address.";
		}
		if (!/^\d{10}$/.test(step1Data.leaderContact)) {
			newErrors.leaderContact = "Contact number should be exactly 10 digits.";
		}
		if (step1Data.numberOfMembers < event.details.min || step1Data.numberOfMembers > event.details.max) {
			newErrors.numberOfMembers = `Number of members should be between ${event.details.min} and ${event.details.max}.`;
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	}

	// Handle change in step 1 form inputs
	function handleStep1Change(e) {
		const { name, value } = e.target;
		setStep1Data({
			...step1Data,
			[name]: value,
		});

		// Perform live validation after each change
		validateForm();
	}

	// Handle member data changes in each MemberForm
	function handleMemberChange(index, e) {
		const { name, value } = e.target;
		const updatedMembers = [...membersData];
		updatedMembers[index] = {
			...updatedMembers[index],
			[name]: value,
		};
		setMembersData(updatedMembers);
	}

	// Handle Next button
	function handleNext() {
		// Initialize membersData based on number of members
		if (validateForm()) {
			setMembersData(
				Array.from({ length: step1Data.numberOfMembers }, () => ({
					name: "",
					regNo: "",
					email: "",
					department: "",
					yearOfStudy: "",
				}))
			);
			setStep(2);
		}
	}

	// Handle Back button
	function handleBack() {
		setStep(1);
	}

	// Handle Submit button (for processing data)
	function handleSubmit() {
		if (validateForm()) {
			const registrationData = {
				...step1Data,
				members: membersData,
				event: event,
				payment_status: event.details.fee === 0 ? 1 : 0,
			};
			console.log("Registration Data:", registrationData);
			// You can submit registrationData here (e.g., API call)
			axios
				.post(`${backendURL}/student/register`, registrationData)
				.then((response) => {
					console.log(response.data.message);

					// Setup the modal config
					setModalData({
						eventName: event.details.name,
						teamName: registrationData.teamName,
						amount: response.data.amountToBePaid,
						noOfMembers: registrationData.numberOfMembers,
					});
					setIsModalOpen(true);
				})
				.catch((error) => {
					console.log("error: ", error);
				});
		} else {
			console.log("Form validation failed.");
		}
	}

	function handleCloseModal() {
		setIsModalOpen(false);
	}

	return (
		<div>
			{/* Step 1: Team Information */}
			<div
				className={`container max-w-screen-2xl md:px-20 px-5 my-32 ${step === 1 ? "block" : "hidden"}`}
			>
				<div className="text-center mb-4">
					<Heading1 text={event.details.name}></Heading1>
				</div>
				<div className="md:w-2/4 mx-auto md:px-10 px-2 py-5 primary-shadow rounded-lg">
					{/* Team Name Input */}
					<InputField
						type={"text"}
						label={"Team Name"}
						placeholder={"Enter your team's name / your name"}
						name="teamName"
						value={step1Data.teamName}
						onChange={handleStep1Change}
					/>
					{errors.teamName && <p className="text-red-500 text-sm">{errors.teamName}</p>}

					{/* Leader's Email Input */}
					<InputField
						type={"email"}
						label={"Leader's Email"}
						placeholder={"Enter your team leader's email id"}
						name="leaderEmail"
						value={step1Data.leaderEmail}
						onChange={handleStep1Change}
					/>
					{errors.leaderEmail && <p className="text-red-500 text-sm">{errors.leaderEmail}</p>}

					{/* Leader's Contact Input */}
					<InputField
						type={"tel"}
						label={"Leader's Contact No."}
						placeholder={"Enter your team leader's contact no."}
						name="leaderContact"
						value={step1Data.leaderContact}
						onChange={handleStep1Change}
					/>
					{errors.leaderContact && <p className="text-red-500 text-sm">{errors.leaderContact}</p>}

					{/* Number of Members Input */}
					<div>
						<label className="form-control w-full mx-auto my-3">
							<div className="label">
								<span className="label-text font-bold">No. of Members</span>
							</div>
							<input
								type="number"
								min={event.details.min !== "n" ? event.details.min : 1}
								max={event.details.max !== "n" ? event.details.max : 10}
								placeholder="Enter the number of team members"
								className="input input-bordered w-full bg-base-200"
								name="numberOfMembers"
								value={step1Data.numberOfMembers}
								onChange={handleStep1Change}
							/>
						</label>
						{errors.numberOfMembers && <p className="text-red-500 text-sm">{errors.numberOfMembers}</p>}
					</div>

					{/* team's dept Input */}
					<label className="form-control w-full mx-auto my-3">
						<div className="label">
							<span className="label-text font-bold">Department</span>
						</div>
						<select
							className="select select-bordered w-full"
							value={step1Data.dept}
							onChange={handleStep1Change}
							name="dept"
						>
							<option value="CSE regular">CSE regular</option>
							<option value="CSE specialization 1 (AI,AIML, DS)">CSE specialization 1 (AI,AIML, DS)</option>
							<option value="CSE Specialization 2 (IOT, blockchain, cybersecurity, AI and Robotics)">CSE Specialization 2 (IOT, blockchain, cybersecurity, AI and Robotics)</option>
							<option value="IT">IT</option>
							<option value="Law L.L.M">Law L.L.M</option>
							<option value="Law L.L.B">Law L.L.B</option>
							<option value="Automobile">Automobile</option>
							<option value="Mechanical">Mechanical</option>
							<option value="Aero">Aero</option>
							<option value="Mechatronics">Mechatronics</option>
							<option value="ECE">ECE</option>
							<option value="EEE">EEE</option>
							<option value="Pharmacy">Pharmacy</option>
							<option value="Dental Surgery">Dental Surgery</option>
							<option value="Nursing">Nursing</option>
							<option value="Physiotherapy">Physiotherapy</option>
							<option value="B.Sc Maths">B.Sc Maths</option>
							<option value="Bsc. CS">Bsc. CS</option>
							<option value="M.sc CS">M.sc CS</option>
							<option value="Chemistry">Chemistry</option>
							<option value="Bioinfo">Bioinfo</option>
							<option value="Physics">Physics</option>
							<option value="MCA">MCA</option>
							<option value="Viscom">Viscom</option>
							<option value="B.A., M.A., English">B.A., M.A., English</option>
							<option value="M.Sc BioInformatics and DS">
								M.Sc BioInformatics and DS
							</option>
							<option value="Civil">Civil</option>
							<option value="Architecture">Architecture</option>
							<option value="Fashion Design">Fashion Design</option>
							<option value="MBA">MBA</option>
							<option value="Biomedical">Biomedical</option>
							<option value="Biotechnology">Biotechnology</option>
							<option value="Chemical">Chemical</option>
						</select>
					</label>

					{/* Next Button */}
					<button className="btn btn-primary my-5 block mx-auto w-1/4" onClick={handleNext}>
						Next
					</button>
				</div>
			</div>

			{/* Step 2: Member Information */}
			<div
				className={`container max-w-screen-2xl md:px-20 px-5 my-32 ${step === 2 ? "block" : "hidden"}`}
			>
				<div className="md:w-2/4 mx-auto md:px-10 px-2 py-5">
					{/* Render MemberForms dynamically */}
					{membersData.map((memberData, index) => (
						<MemberForm
							key={index}
							index={index}
							memberData={memberData || {}} // Ensure memberData is always an object
							onMemberChange={handleMemberChange} // Pass change handler
						/>
					))}

					{/* Submit and Back Buttons */}
					<button className="btn btn-primary my-5 block mx-auto w-1/4" onClick={handleSubmit}>
						Submit
					</button>
					<button className="btn btn-accent my-5 block mx-auto w-1/4" onClick={handleBack}>
						Back
					</button>
				</div>
			</div>

			{/* Modal */}
			{isModalOpen && (
				<dialog open className="modal">
					<div className="modal-box md:w-2/4 w-full max-w-5xl bg-base-200">
						<h3 className="font-bold text-xl text-primary">Event: {modalData.eventName}</h3>
						<h3 className="font-bold text-lg">Team Name: {modalData.teamName}</h3>
						<p className="py-4">Registration successful for {modalData.noOfMembers} members.</p>
						<h3 className="font-bold text-lg">
							Registration fee to be paid: <span className="text-warning">{modalData.amount} INR</span>
						</h3>
						<div className="flex flex-wrap justify-start align-middle w-full mt-4 gap-5">
							<LinkButton text={"View venues"} link={'/venues'}></LinkButton>
							<LinkButton text={"View schedules"} link={'/technosummit/events/schedules'}></LinkButton>
						</div>
						<div className="modal-action">
							<button className="btn btn-secondary" onClick={handleCloseModal}>
								Close
							</button>
						</div>
					</div>
				</dialog>
			)}

		</div>
	);
}

export default RegistrationPage;
