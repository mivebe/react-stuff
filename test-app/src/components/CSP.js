import React, { useState } from "react";
import "../styles/CSP.css"

function CSP() {

    const [isMousedOver, setMouseOver] = useState(false);
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    const handleInputChange = key => e => setContact({ ...contact, [key]: e.target.value });

    const handleMouseOver = () => {
        setMouseOver(true);
    }

    const handleMouseOut = () => {
        setMouseOver(false);
    }


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
                <button style={{ backgroundColor: isMousedOver ? "black" : "white" }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >Submit</button>
            </form>
        </div>
    );
}

export default CSP;
