'use client';

import React from "react";
import { useState } from "react";

export default function TodoList() {

    const [todoText, setTodoText] = React.useState("");
    const [todoList, setTodoList] = useState<{ id: number, text: string }[]>([]);

    function handleInput(e: any) {
        console.log("todo text:", e.target.value);
        setTodoText(e.target.value);
    }

    function handleAddTodo() {

        const newTodoItem = {
            id: Number(Math.random() * 999 + 1), // 1 ile 1000 arasinda sayilar üretir.
            text: todoText
        };

        setTodoList([...todoList, newTodoItem])
    }

    function handleDeleteTodo(id: number) {

        const updatedList = todoList.filter((todo) => todo.id !== id);
        setTodoList(updatedList)

    }

    function handleEditTodo(id: number, todoText: string) {

        const copyOfList = [...todoList]; // kopyasi üzerinde calisiyoruz.

        const editedList = copyOfList.map((todo) =>
            todo.id === id ? { ...todo, text: todoText } : todo
        )

        setTodoList(editedList);
        /*

        Todo 1 -> id 1
        Todo 2 -> id 2 -> editlemek istiyorum
        Todo 3 -> id 3


        */

    }

    console.log("todoList", todoList)

    return (
        <>
            <h1>Todo List</h1>
            <input type="text" placeholder="Enter your Todo" onChange={handleInput} style={{ "color": "black" }} />
            <button onClick={handleAddTodo}>Add Todo</button>

            <ul>
                {todoList.length > 0 ? (
                    <>
                        {
                            todoList?.map((todo) => (
                                <li key={todo.id}>
                                    {todo.text}
                                    <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                                    <button onClick={() => handleEditTodo(todo.id, "Updated text")}>Edit</button>
                                </li>

                            ))
                        }

                    </>
                ) : (
                    <li>No Todo!</li>
                )
                }



            </ul>
        </>
    )
}