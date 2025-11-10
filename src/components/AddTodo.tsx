import InputBox from "./ui/InputBox";
import Button from "./ui/Button";
import { useContext, useRef, type KeyboardEventHandler } from "react";
import { TodoContext, type TodoType } from "../context/TodoContex";

function AddTodo() {
    const todoRef = useRef<HTMLInputElement>(null);
    const { todos, setTodos } = useContext(TodoContext);

    const handleAdd = () => {
        if (!todoRef.current) return;
        const title = todoRef.current.value;
        if (title.trim() == "") {
            return alert("Todo name required!");
        }
        const tempTodos: TodoType[] = [
            ...todos,
            { id: Math.random(), title, isDone: false },
        ];
        setTodos(tempTodos);
        localStorage.setItem("todos", JSON.stringify(tempTodos));
        todoRef.current.value = "";
    };

    const handleEnterKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key == "Enter") {
            handleAdd();
        }
    };
    return (
        <div className="flex justify-center rounded-md gap-1.5 bg-input-background py-5 px-2.5 mb-2.5">
            <InputBox inputRef={todoRef} onKeyDown={handleEnterKeyDown}/>
            <Button variant={"secondary"} size={"lg"} onClick={handleAdd}>
                Add
            </Button>
        </div>
    );
}

export default AddTodo;
