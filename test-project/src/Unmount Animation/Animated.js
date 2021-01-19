import React, { useEffect, useState } from "react";

const Fade = ({ show, children }) => {
    const [shouldRender, setShouldRender] = useState(show);

    useEffect(() => {
        if (show) setShouldRender(true);
    }, [show]);

    const onAnimationEnd = () => {
        if (!show) setShouldRender(false);
    };

    return (
        shouldRender && (
            <div style={{ position: "absolute", transform: "translate(50%,50%)", animation: `${show ? "fadeIn" : "fadeOut"} 2s ${show ? "ease-in" : "ease-out"}` }}
                onAnimationEnd={onAnimationEnd}
                className="wrapper"> {children} </div>
        )
    );
};

export default Fade;