import React, { useState } from "react";
import InputField from "../utils/InputField";

function MemberForm({ index, memberData = {}, onMemberChange }) {
    const [errors, setErrors] = useState({});
    function handleChange(e) {
        const { name, value } = e.target;
        const newErrors = { ...errors };
        if (name === "name" && !/^[a-zA-Z\s]+$/.test(value)) {
            newErrors.name = "Name should only contain letters and spaces.";
        } else {
            delete newErrors.name;
        }
        if (name === "regNo" && !/^\d{8}$/.test(value)) {
            newErrors.regNo = "Registration number must be exactly 8 digits.";
        } else {
            delete newErrors.regNo;
        }
        if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
            newErrors.email = "Enter a valid email address.";
        } else {
            delete newErrors.email;
        }
        if (name === "department" && !/^[a-zA-Z\s-]+$/.test(value)) {
            newErrors.department = "Department can only contain letters, spaces, and hyphens.";
        } else {
            delete newErrors.department;
        }
        if (name === "yearOfStudy" && (value < 1 || value > 5)) {
            newErrors.yearOfStudy = "Year of study should be between 1 and 5.";
        } else {
            delete newErrors.yearOfStudy;
        }
        setErrors(newErrors);
        onMemberChange(index, e);
    }

    return (
        <div className="primary-shadow px-3 py-3 rounded-md mb-10">
            <InputField
                type={"text"}
                placeholder={"Enter the member's name"}
                label={"Name"}
                name="name"
                value={memberData.name || ''}
                onChange={handleChange}
                error={errors.name}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

            <InputField
                type={"number"}
                placeholder={"Enter the member's reg No."}
                label={"Reg No."}
                name="regNo"
                value={memberData.regNo || ''}
                onChange={handleChange}
                error={errors.regNo} 
            />
            {errors.regNo && <span className="text-red-500 text-sm">{errors.regNo}</span>}

            <InputField
                type={"email"}
                placeholder={"Enter the member's email id"}
                label={"Email ID"}
                name="email"
                value={memberData.email || ''}
                onChange={handleChange}
                error={errors.email}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

            <InputField
                type={"text"}
                placeholder={"Enter the member's department"}
                label={"Department"}
                name="department"
                value={memberData.department || ''}
                onChange={handleChange}
                error={errors.department} 
            />
            {errors.department && <span className="text-red-500 text-sm">{errors.department}</span>}

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
                        onChange={handleChange}
                    />
                    {errors.yearOfStudy && (
                        <span className="text-red-500 text-sm">{errors.yearOfStudy}</span>
                    )}
                </label>
            </div>
        </div>
    );
}

export default MemberForm;
