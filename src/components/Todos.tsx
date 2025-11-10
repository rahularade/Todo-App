import { useContext } from "react";
import { TodoContext, type TodoType } from "../context/TodoContex";
import Todo from "./Todo";

function Todos() {
    const {todos} = useContext(TodoContext)
    return (
        todos?.length > 0 &&
        <div className="flex flex-col p-2.5 gap-3 rounded-b-lg">
            {todos.map((todo: TodoType) => <Todo key={todo.id} id={todo.id} title={todo.title} isDone={todo.isDone}/>)}
        </div>
    );
}

export default Todos;
