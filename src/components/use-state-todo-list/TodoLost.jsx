import {useEffect, useState} from 'react';
import './index.css'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadTodos = async () => {
            try {
                setIsLoading(true);
                setError('');
                const response = await fetch('https://dummyjson.com/todos?limit=10');
                if (!response.ok) {
                    throw new Error('Failed to load todos');
                }
                const data = await response.json();
                setTodos(data.todos);
            } catch (err) {
                setError(err.message || 'Unknown error');
            } finally {
                setIsLoading(false);
            }
        };

        loadTodos();
    }, []);

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo)
        );
    };

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
                <div className={'todo-list'}
                     key={todo.id}>
                  <span className={'todo-item'}
                        style={{textDecoration: todo.completed ? 'line-through' : 'none',}}>
                    {todo.todo}
                  </span>
                    <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export {TodoList};