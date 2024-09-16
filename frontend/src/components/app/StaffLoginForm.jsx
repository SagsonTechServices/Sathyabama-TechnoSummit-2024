import React from "react";
import InputField from "../utils/InputField";
import { useState } from "react";

function StaffLoginForm() {
  const [loginData, setLoginData] = useState({
    role: "",
    mobileNo: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleOnSubmit = () => {
    console.log(loginData);
  }

  return (
    <div className="md:px-10 px-4 py-4 primary-shadow rounded-lg md:w-2/5 mx-auto">
        <div className="label">
          <span className="label-text font-bold">Your role</span>
        </div>
        <select className="select select-bordered w-full" id="role" name="role" value={loginData.role} onChange={handleOnChange}>
        <option disabled value={""}>
          I am a...
        </option>
        <option value={"deptCoord"}>Department Coordinator</option>
        <option value={"eventCoord"}>Event Coordinator</option>
      </select>

      <InputField
        label={"Mobile No"}
        name={"mobileNo"}
        value={loginData.mobileNo}
        type={"tel"}
        placeholder={"Enter your mobile number"}
        onChange={handleOnChange}
      ></InputField>

      <InputField
        label={"Password"}
        name={"password"}
        value={loginData.password}
        type={"password"}
        placeholder={"Enter your password"}
        onChange={handleOnChange}
      ></InputField>

      <button className="btn btn-primary w-1/2 mx-auto block mt-10" onClick={handleOnSubmit}>Submit</button>
    </div>
  );
}

export default StaffLoginForm;
