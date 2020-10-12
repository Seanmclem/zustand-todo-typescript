import React from 'react';
import { TodoEntry } from "./TodoEntry";
import { TodoList } from './TodoList';

export const TodoHome = () => {
    return (
        <div className="todo-home-container">
            <div> Todo Home </div>
            <TodoEntry />
            <TodoList />
        </div>
    )
}