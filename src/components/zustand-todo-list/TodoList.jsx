import {useTodoStore} from "../../store/useTodoStore.js";
import './index.css'

function TodoList() {
    const todos = useTodoStore((state) => state.todos);
    const isLoading = useTodoStore((state) => state.isLoading);
    const error = useTodoStore((state) => state.error);

    const fetchTodos = useTodoStore((state) => state.fetchTodos);
    const deleteTodo = useTodoStore((state) => state.deleteTodo);
    const toggleTodo = useTodoStore((state) => state.toggleTodo);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Todo List</h1>

            {todos.map((todo) => (
                <div key={todo.id}
                     className={'todo-list'}>
                  <span className={'todo-item'}
                        style={{textDecoration: todo.completed ? 'line-through' : 'none',}}>
                    {todo.todo}
                  </span>
                    <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            ))}
            <button onClick={fetchTodos}>Refresh</button>
        </div>
    );
}

export {TodoList};