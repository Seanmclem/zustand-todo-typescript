import create, { SetState } from "zustand";

export interface IToDoItem {
    title: string;
    done: boolean;
}

type ISet = {
    todoList: IToDoItem[];
    addToTodoList: (toAdd: IToDoItem) => void;
}

export const useTodoStore = create<ISet>((set: SetState<ISet>) => ({
    todoList: [],
    addToTodoList: (toAdd: IToDoItem) => set((state: ISet) => ({ todoList: [...state.todoList, toAdd] })),
}))