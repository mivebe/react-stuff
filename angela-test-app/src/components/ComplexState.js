import React, { useState } from "react";
import "../styles/ComplexState.css"

function ComplexState() {

    const [fullName, setFullName] = useState({ fName: "", lName: "" });

    const handleChange = e => {
        const { name, value } = e.target;
        setFullName((prev) => {
            return name === "fName" ? { fName: value, lName: prev.lName } : { fName: prev.fName, lName: value };
        });
    };
    return (
        <div className="container">
            <h1>Hello {fullName.fName} {fullName.lName}</h1>
            <form>
                <input name="fName" placeholder="First Name" onChange={handleChange} />
                <input name="lName" placeholder="Last Name" onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default ComplexState;
