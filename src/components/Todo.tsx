import { useContext, useState } from "react";
import Checkbox from "./ui/Checkbox";
import Button from "./ui/Button";
import EditTodo from "./EditTodo";
import { TodoContext, type TodoType } from "../context/TodoContex";

const Todo = ({id, title, isDone}: TodoType) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isChecked, setIsChecked] = useState(isDone);
    const {todos, setTodos} = useContext(TodoContext)

    const handleDelete = () => {
        const newTodos = todos.filter(t => t.id !== id)
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setTodos(newTodos)
    };

    const handleDone = () => {
        const tempTodos = [...todos]
        const todo = tempTodos.find(t => t.id === id)!
        todo.isDone = !isChecked;
        localStorage.setItem("todos", JSON.stringify(tempTodos));
        setTodos(tempTodos)
        setIsChecked(c => !c)
    };

    return isEditing ? (
        <EditTodo id={id} title={title} setIsEditing={setIsEditing}/>
    ) : (
        <div className="flex gap-2.5 items-center">
            <div className="flex-1 flex gap-2 text-heading items-center">
                <Checkbox checked={isDone} onChange={handleDone}/>
                <p className={`${isChecked ? "line-through text-gray-500" : "text-heading transition-all duration-300"}`}>{title}</p>
            </div>
            <div className="flex gap-2">
                <Button
                    variant={"primary"}
                    size={"sm"}
                    onClick={() => setIsEditing(true)}
                >
                    Edit
                </Button>
                <Button variant={"danger"} size={"sm"} onClick={handleDelete}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default Todo;
