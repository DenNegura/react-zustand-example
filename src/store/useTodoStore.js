import {create} from 'zustand';

const useTodoStore = create((set) => ({
    todos: [],
    isLoading: false,
    error: '',

    fetchTodos: async () => {
        try {
            set({isLoading: true, error: ''});

            const response = await fetch('https://dummyjson.com/todos?limit=10');
            if (!response.ok) {
                throw new Error('Failed to load todos');
            }

            const data = await response.json();

            set({
                todos: data.todos,
                isLoading: false,
            });
        } catch (err) {
            set({
                error: err.message || 'Unknown error',
                isLoading: false,
            });
        }
    },

    deleteTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),

    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo),
        })),
}));

export {useTodoStore};