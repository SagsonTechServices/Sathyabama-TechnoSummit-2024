import React, { useState } from "react";
import LinkButton from "../utils/LinkButton";

function SummaryContainer() {
    const [activeTeam, setActiveTeam] = useState(null);

    const showModal = (teamIndex) => {
        setActiveTeam(teamIndex);
        document.getElementById(`modal_${teamIndex}`).showModal();
    };

    const closeModal = (teamIndex) => {
        document.getElementById(`modal_${teamIndex}`).close();
    };

    const teams = Array(6).fill({
        teamName: "Team Someone",
        teamLeader: "Someone",
        contact: "0000000000",
        members: "3",
        amount: "300"
    });

    const members = Array(3).fill({
        name: "Someone",
        regNo: "00000000",
        email: "someone@example.com",
        department: "be-cse",
        yearOfStudy: "3"
    })

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Team Name</th>
                            <th>Team Leader's Name</th>
                            <th>Team Leader's Contact No.</th>
                            <th>No. of Members</th>
                            <th>Amount Paid</th>
                            <th>Member Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Table Rows */}
                        {teams.map((team, idx) => (
                            <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{team.teamName}</td>
                                <td>{team.teamLeader}</td>
                                <td>{team.contact}</td>
                                <td>{team.members}</td>
                                <td>{team.amount}</td>
                                <td>
                                    <LinkButton
                                        text={"View Team Details"}
                                        className={"md:btn-sm"}
                                        onClick={() => showModal(idx)}
                                    />
                                </td>
                                {/* Modal for Each Team */}
                                <dialog id={`modal_${idx}`} className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <h3 className="font-bold text-lg">Team {team.teamName} Details:</h3>
                                        <div className="overflow-x-auto">
                                            <table className="table">
                                                {/* Table Head */}
                                                <thead>
                                                    <tr>
                                                        <th>Serial No.</th>
                                                        <th>Name</th>
                                                        <th>Register no.</th>
                                                        <th>Email</th>
                                                        <th>Department</th>
                                                        <th>Year Of Study</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* Table Rows */}
                                                    {members.map((member, idx) => (
                                                        <tr key={idx}>
                                                            <th>{idx + 1}</th>
                                                            <td>{member.name}</td>
                                                            <td>{member.regNo}</td>
                                                            <td>{member.email}</td>
                                                            <td>{member.department}</td>
                                                            <td>{member.yearOfStudy}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="modal-action">
                                            <button className="btn" onClick={() => closeModal(idx)}>Close</button>
                                        </div>
                                    </div>
                                </dialog>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SummaryContainer;
