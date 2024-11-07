'use client'
import React, { useState } from "react";
export default function Todos() {
    const [todos, addTodo] = useState([
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
    ]);
    const [userInput, setUserInput] = useState("");

    function handleChange(e) {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newValue = { id: todos.length + 1, title: userInput };
        addTodo((todos) => [newValue, ...todos]);
    };
    return (
        <div>
            <h1>My Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userInput} onChange={handleChange} placeholder="Add a todo" />
                <button>Add</button>
            </form>
            <div>
                {todos.map(({ id, title }) => {
                    return (
                        <li key={id}>
                            {id} {title}
                        </li>
                    );
                })}
            </div>
        </div>
    );
}