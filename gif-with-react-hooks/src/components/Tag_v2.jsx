import React, { useState } from 'react';

import useGif from "../useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    const [tag, setTag] = useState("borderlands");
    const { gif, fetchGif } = useGif(tag);

    return (
        <div className="container">
            <h1>Random {tag} GIF</h1>
            <img width="500" src={gif} alt="Random Tag Gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={() => fetchGif(tag)}>CLICK FOR NEW</button>
        </div>
    );
};

export default Tag;