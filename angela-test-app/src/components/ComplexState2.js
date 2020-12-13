import React, { useState } from "react";
import "../styles/ComplexState.css"

function ComplexState2() {

    const [fullName, setFullName] = useState({ fName: "", lName: "" });

    return (
        <div className="container">
            <h1>Hello {fullName.fName} {fullName.lName} </h1>
            <form>
                <input name="fName" placeholder="First Name" onChange={e => setFullName({ fName: e.target.value })} />
                <input name="lName" placeholder="Last Name" onChange={e => setFullName({ lName: e.target.value })} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default ComplexState2;
