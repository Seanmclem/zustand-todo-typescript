import create, { SetState } from "zustand";

type ISet = {
    todoList: string[];
    addToTodoList: (toAdd: string) => void;
}

export const useTodoStore = create<ISet>((set: SetState<ISet>) => ({
    todoList: [],
    addToTodoList: (toAdd: string) => set((state: ISet) => ({ todoList: [...state.todoList, toAdd] })),
}))