import React from "react";
import InputField from "../utils/InputField";

function MemberForm({ index, memberData = {}, onMemberChange }) {
  return (
    <div className="primary-shadow px-3 py-3 rounded-md mb-10">
      <InputField
        type={"text"}
        placeholder={"Enter the member's name"}
        label={"Name"}
        name="name"
        value={memberData.name || ''}
        onChange={(e) => onMemberChange(index, e)}
      />

      <InputField
        type={"number"}
        placeholder={"Enter the member's reg No."}
        label={"Reg No."}
        name="regNo"
        value={memberData.regNo || ''}
        onChange={(e) => onMemberChange(index, e)}
      />

      <InputField
        type={"email"}
        placeholder={"Enter the member's email id"}
        label={"Email ID"}
        name="email"
        value={memberData.email || ''}
        onChange={(e) => onMemberChange(index, e)}
      />

      <InputField
        type={"text"}
        placeholder={"Enter the member's department"}
        label={"Department"}
        name="department"
        value={memberData.department || ''}
        onChange={(e) => onMemberChange(index, e)}
      />

      <div>
        <label className="form-control w-full mx-auto my-3">
          <div className="label">
            <span className="label-text font-bold">Year of Study</span>
          </div>
          <input
            type="number"
            min={1}
            max={5}
            placeholder="Enter the member's year of study"
            className="input input-bordered w-full bg-base-200"
            name="yearOfStudy"
            value={memberData.yearOfStudy || ''}
            onChange={(e) => onMemberChange(index, e)}
          />
        </label>
      </div>
    </div>
  );
}

export default MemberForm;
