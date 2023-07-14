import React from "react";

export default function TodoItem({ completed, id, title, toggleTodo, deleteTodods }) {
    return (
        <li>
            <label>
                <input 
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)} 
               />
               {title}
            </label>
            <button 
                className='btn btn-danger'
                onClick={() => deleteTodods(id)}
                >
                Delete
            </button>
        </li>
    )
}