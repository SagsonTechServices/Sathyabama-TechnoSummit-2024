import React, { version } from 'react'

function VenueCard({ image, title, venue, id }) {
  return (
    <div>
      <div className="card primary-shadow bg-base-200">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Venue"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-primary">{title}</h2>
          <p>{venue}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={() => document.getElementById(id).showModal()}>location</button>
          </div>
        </div>
      </div>

      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{venue}</h3>
          <figure className="px-10 pt-10">
            <img
              src={image}
              alt="Venue"
              className="rounded-xl" />
          </figure>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default VenueCard