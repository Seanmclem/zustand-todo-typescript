import React from 'react';
import { useTodoStore } from '../utils/storeUtils';
import { ToDoListItem } from './ToDoListItem';

export const TodoDone = () => {
    const todoList = useTodoStore(state => state.todoList)

    return (
        <ul>
            {todoList
            .filter(todoItem => todoItem.done)
            .map((todoItem, id) => (
                <ToDoListItem 
                    todoItem={todoItem} 
                    id={id} 
                    key={`${todoItem.title}${id}`} 
                />
            ))}
        </ul>
    )
}