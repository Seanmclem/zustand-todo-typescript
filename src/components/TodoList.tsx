import React from 'react';
import { useTodoStore } from '../utils/storeUtils';

export const TodoList = () => {
    const todoList = useTodoStore(state => state.todoList)
    // TODO: onclick mark done
    return (
        <ul>
            {todoList.map((todoItem, id) => (
                <li key={`${todoItem.title}${id}`}> 
                    {todoItem.title}
                </li>
            ))}
        </ul>
    )
}