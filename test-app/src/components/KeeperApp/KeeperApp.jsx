import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

import "../../styles/KeeperApp.css"

function KeeperApp() {

    const [notes, setNotes] = useState([])

    const deleteNote = (id) => {
        setNotes(prevNotes => {
            return prevNotes.filter((item, index) => {
                return index !== id;
            });
        });
    }

    const handleSubmit = (title, text) => {
        setNotes(() => {
            return [...notes, { title, text }]
        })
    }

    return (
        <div >
            <Header />
            <div id={"container"}>
                <CreateArea handleSubmit={handleSubmit} />
                {notes.map((el, index) => {
                    return <Note key={index} id={index} title={el.title} content={el.text} deleteNote={deleteNote} />
                })}
            </div>
            <Footer />
        </div>
    );
}

export default KeeperApp;
