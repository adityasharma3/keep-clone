import React from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

//inline styling
const deleteBtn = {
    position: 'absolute',
    bottom: '5px',
    right: '10px'
}

const editbtn = {
    position: 'absolute',
    bottom: '5px'
}

const parastyle = {
    margin: '0 0 2rem 0'
}

function editBtnClicked() {
    return (
        // <EditNote />
        alert('click edit btn')
    );
}

function Notes(props) {

    const deleteNote = () => {
        props.deleteNote(props.id);
    }


    return (
        <div className="notes">
            <div className="note">
                <h3>
                    {props.title}
                </h3>
                
                <p style={parastyle} >
                    {props.description}
                </p>

                <AiFillDelete
                    className="delete-btn"
                    onClick={deleteNote}
                    style={deleteBtn}
                />

                <AiFillEdit
                    className="edit-btn"
                    onClick = {editBtnClicked}
                    style={editbtn}
                />

            </div>
        </div>
    );
}

export default Notes;