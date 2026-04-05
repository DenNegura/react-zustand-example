import {create} from "zustand";
import {createJSONStorage, devtools, persist} from 'zustand/middleware';

const initialState = {count: 0, something: 'something'}

const counterStore = (set) => ({
    ...initialState,
    reset: () => set({count: 0}, false, 'reset'),
    increment: () => set((state) => ({count: state.count + 1}), false, 'increment'),
    decrement: () => set((state) => ({count: state.count - 1}), false, 'decrement'),
});

export const useCounterStore = create(
    devtools(
        persist(
            counterStore,
            {
                name: 'counter-storage',
                storage: createJSONStorage(() => localStorage),
                partialize: (state) => ({count: state.count})
            }
        )
    )
)

