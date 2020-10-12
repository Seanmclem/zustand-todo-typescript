import create, { SetState } from "zustand";

export interface IToDoItem {
    title: string;
    done: boolean;
}

type ISet = {
    todoList: IToDoItem[];
    addToTodoList: (toAdd: IToDoItem) => void;
    removeToDoListItem: (idToRemove: number) => void;
    markDoneToDoListItem: (idToToggleDone: number) => void;
}

export const useTodoStore = create<ISet>((set: SetState<ISet>) => ({
    todoList: [],
    addToTodoList: (toAdd: IToDoItem) => set((state: ISet) => ({ todoList: [...state.todoList, toAdd] })),
    removeToDoListItem: (idToRemove: number) => set((state: ISet) => {
        let newArray = [...state.todoList];
        newArray.splice(idToRemove, 1);
        return { todoList: [...newArray] };
    }),
    markDoneToDoListItem: (idToToggleDone: number) => set((state: ISet) => {
        let newArray = [...state.todoList];
        newArray[idToToggleDone].done = !newArray[idToToggleDone].done;
        return { todoList: [...newArray] };
    }),
}))