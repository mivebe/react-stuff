import React, { useState } from "react";
import "../styles/CSP.css"

function CSP() {
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    const handleInputChange = key => e => setContact({ ...contact, [key]: e.target.value })


    return (
        <div className="container">
            <h1>
                Hello {contact.fName} {contact.lName}
            </h1>
            <p>{contact.email}</p>
            <form>
                <input name="fName" value={contact.fName} onChange={handleInputChange('fName')} placeholder="First Name" />
                <input name="lName" value={contact.lName} onChange={handleInputChange('lName')} placeholder="Last Name" />
                <input name="email" value={contact.email} onChange={handleInputChange('email')} placeholder="Email" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default CSP;
