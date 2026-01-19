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
            <div className="text-heading text-sm p-2 absolute bottom-0">
                Built with ❤️ by{" "}
                <a
                    href="https://rahularade.site"
                    target="_blank"
                    className="hover:underline"
                >
                    Rahul Arade
                </a>
                <div className="flex justify-center gap-4">
                    <a
                        href="https://github.com/rahularade/Todo-App"
                        className="p-2 text-heading/70 hover:text-white hover:bg-input-background rounded"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-4"
                        >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                    </a>
                    <a
                        href="https://in.linkedin.com/in/rahul-arade"
                        className="p-2 text-heading/70 hover:text-white hover:bg-input-background rounded"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-4"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                    <a
                        href="mailto:araderahul9196@gmail.com"
                        className="p-2 text-heading/70 hover:text-white hover:bg-input-background rounded"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-4"
                        >
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
