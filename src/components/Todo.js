import React, { useState } from 'react'


function Todo(props) {

    const [isEditing, setEditing] = useState(false)
    const [newName, setNewName] = useState('');

    function handleChange(e) {
        //function that can be used to update newName
        setNewName(e.target.value);
    }
    //handle the edit form’s onSubmit event
    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false)
    }
    //edit mode in UI
    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    New name for {props.name}
                </label>
                <input id={props.id}
                    className="todo-test"
                    type="text"
                    value={newName}
                    onChange={handleChange} />
            </div>
            <div className="btn-group">
                <button type="button"
                    className="btn todo-cancel"
                    value={newName}
                    onClick={() => setEditing(false)}
                >cancel
                    <span className="visually-hidden">renaming {props.name}</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit">
                    save
                    <span className="visually-hidden">new name for {props.name}</span>
                </button>
            </div>
        </form>
    )
    //view mode in UI
    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>

            </div>
            <div className="btn-group">
                <button
                    type="button"
                    className="btn"
                    onClick={() => setEditing(true)}
                >
                    Edit <span className="visually-hidden">{props.name}</span>
                </button>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </div>
    )
    return (
        <li className="todo">
            {isEditing ? editingTemplate : viewTemplate}
        </li>
    )
}

export default Todo