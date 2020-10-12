import React from 'react';
import { useTodoStore } from '../utils/storeUtils';

export const TodoList = () => {
    const todoList: any[] = useTodoStore(state => state.todoList) as any[]

    return (
        <ul>
            {todoList.map((todoItem, id) => (
                <li key={`${todoItem}${id}`}>{todoItem}</li>
            ))}
        </ul>
    )
}