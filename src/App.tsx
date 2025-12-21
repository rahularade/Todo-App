import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { TodoContextProvider } from "./context/TodoContex";

function App() {
    return (
        <div className="w-full min-h-dvh p-5 relative flex flex-col items-center bg-background font-poppins">
            <a href="https://github.com/rahularade/Todo-App" target="_blank">
                <h1 className="text-4xl font-medium text-heading my-5">
                    Just Do It!
                </h1>
            </a>
            <TodoContextProvider>
                <div className="bg-foreground py-5 px-4 pb-2.5 rounded-lg w-96">
                    <AddTodo />
                    <div>
                        <Todos />
                    </div>
                </div>
            </TodoContextProvider>
            <p className="text-heading text-sm p-2 absolute bottom-0">
                Built with ❤️ by{" "}
                <a
                    href="https://github.com/rahularade"
                    target="_blank"
                    className="hover:underline"
                >
                    Rahul Arade
                </a>
            </p>
        </div>
    );
}

export default App;
