import React from 'react'

function MessageModal({id , eventName, teamName, noOfMembers, amount, message, state}) {
    if(!state){
        return null;
    }
  return (
    <div>
            {/* modal  */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={id} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-xl">Event: {eventName}</h3>
          <h3 className="font-bold text-lg">Team/Name: {teamName}</h3>
          <p className="py-4">{message}</p>
          <h3 className="font-bold text-lg">No. of members in the team: {noOfMembers}</h3>
          <h3 className="font-bold text-xl text-warning">Registration fee to be paid: {amount}/INR</h3>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default MessageModal
