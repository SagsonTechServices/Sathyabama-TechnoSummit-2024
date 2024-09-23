import React, { useState } from "react";
import InputField from "../utils/InputField";
import Heading1 from "../utils/Heading1";
import { useNavigate, useParams } from "react-router-dom";
import eventData from "../../../data/eventData";
import MemberForm from "../app/MemberForm";
import axios from "axios";
import LinkButton from '../utils/LinkButton';

function RegistrationPage() {
    const { eventId } = useParams();
    const event = eventData.find((event) => event.id === parseInt(eventId));
    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

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
        dept: "CSE regular",
        numberOfMembers: event.details.min !== "n" ? event.details.min : 1,
    }); // State for step 1 data
    const [membersData, setMembersData] = useState([]); // State for members data
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // Loading state

    // Validation function
    function validateForm() {
        const newErrors = {};

        // Convert min and max values to integers
        const minMembers = parseInt(event.details.min, 10);
        const maxMembers = parseInt(event.details.max, 10);

        if (!/^[a-zA-Z\s]+$/.test(step1Data.teamName)) {
            newErrors.teamName = "Team name should only contain letters and spaces.";
        }
        if (!/^\S+@\S+\.\S+$/.test(step1Data.leaderEmail)) {
            newErrors.leaderEmail = "Enter a valid email address.";
        }
        if (!/^\d{10}$/.test(step1Data.leaderContact)) {
            newErrors.leaderContact = "Contact number should be exactly 10 digits.";
        }
        if (step1Data.numberOfMembers < minMembers || step1Data.numberOfMembers > maxMembers) {
            newErrors.numberOfMembers = `Number of members should be between ${minMembers} and ${maxMembers}.`;
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
        let { name, value } = e.target;
        const updatedMembers = [...membersData];

        // Check if the department is being updated and set to "CSE regular" if it's empty
        if (name === "department" && value.trim() === "") {
            value = "Select"; // Set default department if the value is empty
        }

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
            setLoading(true); // Set loading state to true
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
                })
                .finally(() => {
                    setLoading(false); // Reset loading state after request completes
                });
        } else {
            console.log("Form validation failed.");
        }
    }

    function handleCloseModal() {
        setIsModalOpen(false);
        navigate('/');
    }

    return (
        <div>
            {/* Step 1: Team Information */}
            <div className={`container max-w-screen-2xl md:px-20 px-5 my-32 ${step === 1 ? "block" : "hidden"}`}>
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
                                min={parseInt(event.details.min, 10)}
                                max={parseInt(event.details.max, 10)}
                                placeholder="Enter the number of team members"
                                className="input input-bordered w-full bg-base-200"
                                name="numberOfMembers"
                                value={step1Data.numberOfMembers}
                                onChange={handleStep1Change}
                            />
                        </label>
                        {errors.numberOfMembers && <p className="text-red-500 text-sm">{errors.numberOfMembers}</p>}
                    </div>

                    {/* Department Input */}
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
                            {/* Add other department options here */}
                        </select>
                    </label>

                    {/* Next Button */}
                    <button className="btn btn-primary my-5 block mx-auto w-1/4" onClick={handleNext}>
                        Next
                    </button>
                </div>
            </div>

            {/* Step 2: Member Information */}
            <div className={`container max-w-screen-2xl md:px-20 px-5 my-32 ${step === 2 ? "block" : "hidden"}`}>
                <div className="md:w-2/4 mx-auto md:px-10 px-2 py-5">
                    {/* Render MemberForms dynamically */}
                    {membersData.map((memberData, index) => (
                        <div key={index} className="border p-4 mb-4 rounded-lg">
                            <h2 className="text-lg font-bold">Member {index + 1}</h2>
                            <MemberForm
                                member={memberData}
                                onChange={(e) => handleMemberChange(index, e)}
                            />
                        </div>
                    ))}
                    {/* Back and Submit buttons */}
                    <div className="flex justify-between mt-4">
                        <button className="btn btn-secondary" onClick={handleBack}>
                            Back
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                            disabled={loading} // Disable submit button if loading
                        >
                            {loading ? "Submitting..." : "Submit"} {/* Show loader if loading */}
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-box">
                        <h2 className="font-bold text-lg">{modalData.eventName} Registration</h2>
                        <p className="py-4">
                            You have successfully registered the team <strong>{modalData.teamName}</strong> for the event with
                            {modalData.noOfMembers} members. <br />
                            {modalData.amount !== 0 && (
                                <>
                                    The amount to be paid is: <strong>₹{modalData.amount}</strong>.
                                </>
                            )}
                        </p>
                        <div className="modal-action">
                            <LinkButton url="/" text="Back to home" classes="btn btn-primary" onClick={handleCloseModal} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RegistrationPage;
