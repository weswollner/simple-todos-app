'use client'
import React, { useState } from "react";
export default function Todos() {
    const todos = [
        {
            "id": 1,
            "title": "Eat breakfast"
        },
        {
            "id": 2,
            "title": "Go to class"
        },
        {
            "id": 3,
            "title": "Do homework"
        }
    ]
    const [userInput, setUserInput] = useState("");
    function handleChange(e) {
        setUserInput(e.target.value);
    }
    return (
        <div>
            <h1>My Todo List</h1>
            <input type="text" onChange={handleChange} placeholder="Add a todo" />
            {userInput}
            <button>Add</button>
            <div>
                {todos.map(({ id, title }) => {
                    return (
                        <li key={id}>
                            {id} {title}
                        </li>
                    );
                })}
            </div>
            <br />
        </div>
    );
}