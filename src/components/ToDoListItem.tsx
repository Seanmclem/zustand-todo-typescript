import React from 'react';
import { useTodoStore, IToDoItem } from '../utils/storeUtils';
import styled from 'styled-components';

interface IToDoListItem {todoItem:IToDoItem, id:number}

const ListItemTodo = styled.li`
    display: flex;
    justify-content: center;
`

const ListItemText = styled.li<{done: boolean}>`
    color: ${props => props.done ? 'gray' : 'black'};
    text-decoration: ${props => props.done ? 'line-through' : 'initial'};
    font-style: ${props => props.done ? 'italic' : 'initial'};
`

const ListItemX = styled.div`
    margin-left: 20px;
`

export const ToDoListItem: React.FC<IToDoListItem> = ({todoItem, id}) => {
    const removeToDoListItem = useTodoStore(state => state.removeToDoListItem)

    const markDoneToDoListItem = useTodoStore(state => state.markDoneToDoListItem)

    return ( 
        <ListItemTodo>
            <ListItemText
                className="text"
                onClick={() => markDoneToDoListItem(id)}
                done={todoItem.done}
            >
                {todoItem.title}
            </ListItemText>
            <ListItemX className="x-out" onClick={() => removeToDoListItem(id)}>
                X
            </ListItemX>
        </ListItemTodo>
    )
}