import {create} from "zustand";
import {devtools} from 'zustand/middleware';

const initialState = {count: 0}

const counterStore = (set) => ({
    ...initialState,
    reset: () => set({count: 0}, false, 'reset'),
    increment: () => set((state) => ({count: state.count + 1}), false, 'increment'),
    decrement: () => set((state) => ({count: state.count - 1}), false, 'decrement'),
});

export const useCounterStore = create(devtools(counterStore))

