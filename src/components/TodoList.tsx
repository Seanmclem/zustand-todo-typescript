import React from 'react';
import { useTodoStore } from '../utils/storeUtils';
import { ToDoListItem } from './ToDoListItem';

export const TodoList = () => {
    const todoList = useTodoStore(state => state.todoList)

    return (
        <ul>
            {todoList.map((todoItem, id) => (
                <ToDoListItem 
                    todoItem={todoItem} 
                    id={id} 
                    key={`${todoItem.title}${id}`} 
                />
            ))}
        </ul>
    )
}