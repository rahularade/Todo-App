import {  createContext, useState, type ReactNode } from "react";

export interface TodoType{
    id: number;
    title: string;
    isDone: boolean
}

interface TodoContextType {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    setTodos: () => {}
})

export function TodoContextProvider({children}: {children: ReactNode}){
        const [todos, setTodos] = useState<TodoType[]>(JSON.parse(localStorage.getItem('todos') as string) || [])

    return <TodoContext.Provider value={{todos, setTodos}}>
        {children}
    </TodoContext.Provider>
}