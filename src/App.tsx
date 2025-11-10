import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { TodoContextProvider } from "./context/TodoContex";

function App() {
    return (
        <div className="w-full min-h-dvh p-5 flex flex-col items-center bg-background font-poppins">
            <h1 className="text-4xl font-medium text-heading my-5">
                Just Do It!
            </h1>
            <TodoContextProvider>
                <div className="bg-foreground py-5 px-4 pb-2.5 rounded-lg w-96">
                    <AddTodo />
                    <div>
                        <Todos />
                    </div>
                </div>
            </TodoContextProvider>
        </div>
    );
}

export default App;
