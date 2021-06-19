import React, { useState } from 'react'


function InputSection(props) {

    const [note , setNote] = useState({
        title : '',
        description : ''
    });


    const submitForm = (event) => {
        event.preventDefault();
        note.title = (event.target[0].value);
        note.description = (event.target[1].value);
    }

    const addEvent = () => {
        props.passNote(note);
    }

    const InputEvent = (event) => {

        const {name , value} = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name] : value, 
            }
        });

        // console.log(note);
    }


    return (
        <form 
            className = "input-section"
            onSubmit = {e => submitForm(e)}
        >
            <input 
                type = "text"
                name = "title"
                placeholder = "Title"
                className = "note-title"
                value = {note.title}
                onChange = {e=>InputEvent(e)}
            />

            <textarea
                name = "description"
                placeholder="Take a note ..."
                className = "note-desc"
                value = {note.description}
                onChange={e=>InputEvent(e)}
            />

            <button 
                onClick = {addEvent}  
                type = "submit"
                name = "submit"
                value = "Add note"
            >+  </button>

        </form>
    )
}

export default InputSection;
