import React, { useState, useEffect } from "react";
import RegisteredList_dept from "../app/RegisteredList_dept";
import { useLocation } from "react-router-dom";
import axios from "axios";

function RegisteredPageForDeptCoords() {
    const location = useLocation();
    const teams = location.state;
    const eventName = teams[0].DEPARTMENT;
    
    // State to track the updated teams and success message
    const [updatedTeams, setUpdatedTeams] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");

    const handleOnUpdate = (team_id, isChecked) => {
      // Add or remove team IDs from the updated list
      if (isChecked) {
        setUpdatedTeams((prevTeams) => [...prevTeams, team_id]);
      } else {
        setUpdatedTeams((prevTeams) => prevTeams.filter((t) => t !== team_id));
      }
    };

    useEffect(() => {
        const handleBeforeUnload = (event) => {
          event.preventDefault(); 
          event.returnValue = ''; 
        };
    
        // Add event listener for beforeunload
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []);

    const handleSaveAndCommit = () => {
      setSuccessMessage(""); // Clear the previous message
      console.log(updatedTeams)
      
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/departmentIncharge/update`, { teamIds: updatedTeams })
        .then((response) => {
          setSuccessMessage("Changes have been saved successfully!"); // Set success message
        })
        .catch((err) => {
          setSuccessMessage("An error occurred while saving changes."); // Handle error case
          console.log(err);
        });
    };

  return (
    <div className="container max-w-screen-2xl md:px-20 px-0 my-24">
      <div className="sticky top-16 z-40 bg-base-100 py-3 grid md:grid-cols-6 grid-cols-1 container max-w-screen-2xl md:px-20 px-5">
        <h1 className="text-3xl mb-10 text-primary col-span-5">
          {eventName} - Student registrations
        </h1>
        <button className="btn btn-primary col-span-1" onClick={() => document.getElementById("confirmation").showModal()}>
          Save Changes
        </button>
      </div>
      <RegisteredList_dept teams={teams} handleOnUpdate={handleOnUpdate}></RegisteredList_dept>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="confirmation" className="modal bg-base-200">
        <div className="modal-box text-center">
          <h3 className="font-bold text-lg">Are you sure you want to save the changes?</h3>
          <p className="py-4 text-primary">
            Note: The saved changes cannot be reset.
          </p>
          <button className="btn btn-primary" onClick={handleSaveAndCommit}>Save and commit</button>
          
          {/* Conditionally render the success message */}
          {successMessage && (
            <div className="mt-4 text-green-600 text-xl text-center">
              {successMessage}
            </div>
          )}
          
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default RegisteredPageForDeptCoords;
