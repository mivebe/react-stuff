import React from 'react'
import $ from "jquery"
import "jquery-awesome-cursor"

export default function test() {

    $('#asd')
        .awesomeCursor('pencil', {
            color: 'limegreen',
            size: 24,
            outline: 'brown'
        });

    return (
        <div id={"asd"} style={{ backgroundColor: "darkblue", width: 500, height: 500 }} >
        </div>
    )
}
