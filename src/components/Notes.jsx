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

function Notes(props) {
    return (
        <div className="notes">
            <div className="note">
                <h3>
                    {props.title}
                </h3>
                
                <p style={parastyle}>
                    {props.description}
                </p>

                <AiFillDelete
                    className="delete-btn"
                    style={deleteBtn}
                />

                <AiFillEdit
                    className="edit-btn"
                    style={editbtn}
                />

            </div>
        </div>
    );
}

export default Notes;