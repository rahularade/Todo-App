import InputBox from "./ui/InputBox";
import Button from "./ui/Button";
import { useContext, useRef, type KeyboardEventHandler } from "react";
import { TodoContext, type TodoType } from "../context/TodoContex";

interface EditTodoProps {
    id: number;
    title: string;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}

function EditTodo({id, title, setIsEditing}: EditTodoProps) {
    const todoRef = useRef<HTMLInputElement>(null);
    const { todos, setTodos } = useContext(TodoContext);

    const handleEdit = () => {
        if (!todoRef.current) return;
        if (title.trim() == "") {
            return alert("Todo name required!");
        }
        const tempTodos = [...todos]
        const todo = tempTodos.find(t => t.id === id)!
        todo.title = todoRef.current.value;
        localStorage.setItem("todos", JSON.stringify(tempTodos));
        setTodos(tempTodos)
        setIsEditing(false)
    };

    const handleEnterKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
            if (event.key == "Enter") {
                handleEdit();
            }
        };
    return (
        <div className="flex justify-center rounded-md gap-1.5">
            <InputBox inputRef={todoRef} value={title} onKeyDown={handleEnterKeyDown}/>
            <Button variant={"secondary"} size={"md"} onClick={handleEdit}>
                Save
            </Button>
        </div>
    );
}

export default EditTodo;
