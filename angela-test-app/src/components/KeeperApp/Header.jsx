import React from "react";
import Lightbulb from '@material-ui/icons/EmojiObjects';

function Header() {
    return (
        <header style={{ display: "flex", alignContent: "center" }}>
            <Lightbulb /><h1>Keeper</h1>
        </header>
    );
}

export default Header;
