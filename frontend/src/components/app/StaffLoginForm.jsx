import React, { useState } from "react";
import InputField from "../utils/InputField";
import show from "../../assets/icons/eye.png"
import hide from "../../assets/icons/hidden.png"

function StaffLoginForm() {
	const [loginData, setLoginData] = useState({
		role: "",
		mobileNo: "",
		password: "",
	});

	const [showPassword, setShowPassword] = useState(false);

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		setLoginData({
			...loginData,
			[name]: value,
		});
	};

	const handleOnSubmit = () => {
		console.log(loginData);
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="md:px-10 px-4 py-4 primary-shadow rounded-lg md:w-2/5 mx-auto">
			<div className="label">
				<span className="label-text font-bold">Your role</span>
			</div>
			<select
				className="select select-bordered w-full"
				id="role"
				name="role"
				value={loginData.role}
				onChange={handleOnChange}
			>
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
			/>
			<div className="relative">
				<InputField
					label={"Password"}
					name={"password"}
					value={loginData.password}
					type={showPassword ? "text" : "password"}
					placeholder={"Enter your password"}
					onChange={handleOnChange}
				/>
				<span onClick={togglePasswordVisibility} className="absolute right-4 top-14 cursor-pointer">
					{showPassword ? (<img src={hide} alt="Hide" />) : (<img src={show} alt="Show" />)}
				</span>
			</div>
			<button className="btn btn-primary w-1/2 mx-auto block mt-10" onClick={handleOnSubmit}>Submit</button>
		</div>
	);
}

export default StaffLoginForm;
