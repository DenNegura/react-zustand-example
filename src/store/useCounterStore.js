import {create} from "zustand";
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import {immer} from "zustand/middleware/immer";

const initialState = {count: 0, something: 'something'}

const counterStore = (set) => ({
    ...initialState,
    reset: () => set({count: 0}, false, 'reset'),
    // без immer нужно создавать новый state
    decrement: () => set((state) => ({count: state.count - 1}), false, 'decrement'),
    // immer сам создаст новый state
    increment: () => set((state) => {
        state.count += 1
    }, false, 'increment'),
});

export const useCounterStore = create(
    immer(devtools(persist(counterStore, {
        name: 'counter-storage',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({count: state.count})
    })))
)

