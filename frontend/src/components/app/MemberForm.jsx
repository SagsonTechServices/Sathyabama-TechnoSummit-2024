import React from "react";
import InputField from "../utils/InputField";

function MemberForm(){
    return(
        <div className="primary-shadow px-3 py-3 rounded-md mb-10">
            <InputField type={"text"} placeholder={"Enter the member's name"} label={"name"}></InputField>
            <InputField type={"number"} placeholder={"Enter the member's reg No."} label={"regNo."}></InputField>
            <InputField type={"email"} placeholder={"Enter the member's email id"} label={"email id"}></InputField>
            <InputField type={"text"} placeholder={"Enter the member's department"} label={"Department"}></InputField>
            
            <div>
          <label className="form-control w-full mx-auto my-3">
            <div className="label">
              <span className="label-text font-bold">Year of study</span>
            </div>
            <input
              type="number"
              min={1} max={5}
              placeholder="Enter the member's year of study"
              className="input input-bordered w-full bg-base-200"
            />
          </label>
        </div>
        </div>
    );
}

export default MemberForm;