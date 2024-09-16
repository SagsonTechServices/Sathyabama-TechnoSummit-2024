import React, { useState } from "react";
import InputField from "../utils/InputField";
import Heading1 from "../utils/Heading1";
import { useParams } from "react-router-dom";
import eventData from "../../../data/eventData";
import MemberForm from "../app/MemberForm";
import axios from "axios";
import MessageModal from "../utils/MessageModal";

function RegistrationPage() {
  const { eventId } = useParams();
  const event = eventData.find((event) => event.id === parseInt(eventId));
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  // modalState 
  const [isModalOpen , setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const [step, setStep] = useState(1); // Step tracking
  const [step1Data, setStep1Data] = useState({
    teamName: "",
    leaderEmail: "",
    leaderContact: "",
    dept: "department",
    numberOfMembers: event.details.min !== "n" ? event.details.min : 1,
  }); // State for step 1 data
  const [membersData, setMembersData] = useState([]); // State for members data

  // Handle change in step 1 form inputs
  function handleStep1Change(e) {
    const { name, value } = e.target;
    setStep1Data({
      ...step1Data,
      [name]: value,
    });
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

  // Handle Back button
  function handleBack() {
    setStep(1);
  }

  // Handle Submit button (for processing data)
  function handleSubmit() {
    const registrationData = {
      ...step1Data,
      members: membersData,
      event: event,
      payment_status: 0,
    };
    console.log("Registration Data:", registrationData);
    // You can submit registrationData here (e.g., API call)
    axios
      .post(`${backendURL}/student/register`, registrationData)
      .then((response) => {
        console.log(response.data.message);

        // setup the modal config 
        setModalData({
          eventName: event.details.name,
          teamName: registrationData.teamName,
          amount: response.data.amountToBePaid,
          noOfMembers: registrationData.numberOfMembers
        })
        setIsModalOpen(!isModalOpen);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }

  return (
    <div>
      {/* Step 1: Team Information */}
      <div
        className={`container max-w-screen-2xl md:px-20 px-5 my-32 ${
          step === 1 ? "block" : "hidden"
        }`}
      >
        <div className="text-center mb-4">
          <Heading1 text={event.details.name}></Heading1>
        </div>
        <div className="md:w-2/4 mx-auto md:px-10 px-2 py-5 primary-shadow rounded-lg">
          {/* Team Name Input */}
          <InputField
            type={"text"}
            label={"Team Name"}
            placeholder={
              "Enter your team's name / 'Individual' if you are individual"
            }
            name="teamName"
            value={step1Data.teamName}
            onChange={handleStep1Change}
          />
          {/* Leader's Email Input */}
          <InputField
            type={"email"}
            label={"Leader's Email"}
            placeholder={"Enter your team leader's email id"}
            name="leaderEmail"
            value={step1Data.leaderEmail}
            onChange={handleStep1Change}
          />
          {/* Leader's Contact Input */}
          <InputField
            type={"tel"}
            label={"Leader's Contact No."}
            placeholder={"Enter your team leader's contact no."}
            name="leaderContact"
            value={step1Data.leaderContact}
            onChange={handleStep1Change}
          />
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
          </div>
          {/* team's dept Input */}
          <label className="form-control w-full mx-auto my-3">
            <div className="label">
              <span className="label-text font-bold">Department</span>
            </div>
            <select
              className="select select-bordered w-full max-w-xs"
              value={step1Data.dept}
              onChange={handleStep1Change}
              name="dept"
            >
              <option value="CSE regular">CSE regular</option>
              <option value="CSE advance studies">CSE advance studies</option>
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
              <option value="B.Sc/M.Sc CS">B.Sc/M.Sc CS</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Bioinfo">Bioinfo</option>
              <option value="Physics">Physics</option>
              <option value="MCA">MCA</option>
              <option value="Viscom">Viscom</option>
              <option value="M.A English">M.A English</option>
              <option value="M.Sc BioInformatics and DS">
                M.Sc BioInformatics and DS
              </option>
              <option value="M.Sc Medical Biotech and Clinical Research">
                M.Sc Medical Biotech and Clinical Research
              </option>
              <option value="M.Sc Psychology">M.Sc Psychology</option>
              <option value="Clinical Nutrition and Diabetics">
                Clinical Nutrition and Diabetics
              </option>
              <option value="Medical Lab Technology">
                Medical Lab Technology
              </option>
              <option value="Civil">Civil</option>
              <option value="Architecture">Architecture</option>
              <option value="Design">Design</option>
              <option value="Fashion Design">Fashion Design</option>
              <option value="B.B.A">B.B.A</option>
              <option value="B.Com">B.Com</option>
              <option value="MBA">MBA</option>
              <option value="Biomedical">Biomedical</option>
              <option value="Biotechnology">Biotechnology</option>
              <option value="Chemical">Chemical</option>
              <option value="Microbiology">Microbiology</option>
              <option value="BioChemistry">BioChemistry</option>
            </select>
          </label>
          {/* Next Button */}
          <button
            className="btn btn-primary my-5 block mx-auto w-1/4"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>

      {/* Step 2: Member Information */}
      <div
        className={`container max-w-screen-2xl md:px-20 px-5 my-32 ${
          step === 2 ? "block" : "hidden"
        }`}
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
          <button
            className="btn btn-primary my-5 block mx-auto w-1/4"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="btn btn-accent my-5 block mx-auto w-1/4"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </div>

      {/* message modal  */}
      <MessageModal state={isModalOpen} eventName={modalData.eventName} teamName={modalData.teamName} message={modalData.message} id={"payment_details"} amount={modalData.amount} noOfMembers={modalData.noOfMembers}></MessageModal>

    </div>
  );
}

export default RegistrationPage;
