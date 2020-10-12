import React, { useState } from 'react';
import { useTodoStore } from '../utils/storeUtils';

export const TodoEntry = () => {
    const addToTodoList = useTodoStore(state => state.addToTodoList) as any
    const [entryValue, setEntryValue] = useState<string>("") 


    const updateList = (entryValueUpdate: string) => {
        addToTodoList(entryValueUpdate)
        setEntryValue("")
    }

    return (
        <div>
            <input 
                type="text" 
                value={entryValue}
                onChange={(event) => setEntryValue(event.target.value)}
            />
            <button onClick={() => updateList(entryValue)}>
                Add
            </button>
        </div>

    )
}