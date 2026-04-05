import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';


const initialState = {
    todos: [],
    isLoading: false,
    error: '',
}

const todoStore = (set) => ({
    ...initialState,
    fetchTodos: async () => {
        try {
            set({isLoading: true, error: ''}, false, "todos/fetchTodos");

            const response = await fetch('https://dummyjson.com/todos?limit=10');
            if (!response.ok) {
                throw new Error('Failed to load todos');
            }

            const data = await response.json();

            set({
                todos: data.todos,
                isLoading: false,
            }, false, "todos/fetchTodos/success");
        } catch (err) {
            set({
                error: err.message || 'Unknown error',
                isLoading: false,
            }, false, "todos/fetchTodos/error");
        }
    },

    deleteTodo: (id) => {
        set((state) => {
            state.todos = state.todos.filter((todo) => todo.id !== id);
        }, false, 'todos/deleteTodo');
    },

    toggleTodo: (id) => {
        set((state) => {
            const todo = state.todos.find((item) => item.id === id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }, false, 'todos/toggleTodo');
    },
})

export const useTodoStore = create(
    devtools(
        persist(
            immer(todoStore), {
                name: 'todo-storage',
                storage: createJSONStorage(() => localStorage),
                partialize: (state) => ({
                    todos: state.todos,
                }),
            }
        )
    )
);