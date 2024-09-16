import React from "react";
import RegisteredList_dept from "../app/RegisteredList_dept";
import { useEffect } from "react";

function RegisteredPageForDeptCoords() {
    useEffect(() => {
        const handleBeforeUnload = (event) => {
          event.preventDefault(); // Prevents the default unload action
          event.returnValue = ''; // Standard for most modern browsers
        };
    
        // Add event listener for beforeunload
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []);

  return (
    <div className="container max-w-screen-2xl md:px-20 px-0 my-24">
      <div className="sticky top-16 z-40 bg-base-100 py-3 grid md:grid-cols-6 grid-cols-1 container max-w-screen-2xl md:px-20 px-5">
        <h1 className="text-3xl mb-10 text-primary col-span-5">
          CSE regular - Student registrations
        </h1>
        <button className="btn btn-primary col-span-1" onClick={() => document.getElementById("confirmation").showModal()}>Save Changes</button>
      </div>
      <RegisteredList_dept></RegisteredList_dept>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="confirmation" className="modal bg-base-200">
        <div className="modal-box text-center">
          <h3 className="font-bold text-lg">Are you sure you want to save the changes?</h3>
          <p className="py-4 text-primary">
            Note: The saved changes cannot be reset.
          </p>
          <button className="btn btn-primary">Save and commit</button>
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
