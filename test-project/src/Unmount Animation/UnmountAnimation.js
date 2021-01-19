
import React, { useState } from "react";
import "./UnmountAnimation.css";
import Animated from "./Animated";

const UnmountAnimation = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button className="button" onClick={() => setShow(show => !show)}>
                {show ? "hide" : "show"}
            </button>
            <Animated show={show}>
                <div className="inner"> ASDFGH </div>
            </Animated>
        </div>
    );
};

export default UnmountAnimation