import React from "react";
import InputField from "../utils/InputField";
import Button from "../utils/Button";
import Heading1 from "../utils/Heading1";

function FormStep1({eventName}) {
  return (
    <div className="container max-w-screen-2xl md:px-20 px-5 my-32">
      <div className="text-center mb-4">
      <Heading1 text={eventName}></Heading1>
      </div>
      <div className="md:w-2/4 mx-auto md:px-10 px-2 py-5 primary-shadow rounded-lg">
        <InputField
          type={"text"}
          label={"Teamname"}
          placeholder={"Enter your team's name"}
        ></InputField>
        <InputField
          type={"email"}
          label={"Leader's email"}
          placeholder={"Enter your team leader's email id"}
        ></InputField>

        <div>
          <label className="form-control w-full mx-auto my-3">
            <div className="label">
              <span className="label-text font-bold">No. of members</span>
            </div>
            <input
              type="number"
              min={1}
              placeholder="Enter the number of team members"
              className="input input-bordered w-full bg-base-200"
            />
          </label>
        </div>

        <Button
          text={"Next"}
          classes={"btn-primary my-5 block mx-auto w-1/4"}
        ></Button>
      </div>
    </div>
  );
}

export default FormStep1;
