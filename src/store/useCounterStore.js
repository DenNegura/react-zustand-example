import {create} from "zustand";

export const useCounterStore = create((set, /* get, state */) => ({
    count: 0,
    reset: () => set({count: 0}),
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1})),

    /*
    // set with state
    inc_1: () => set((state) => ({count: state.count + 1})),
    // get with set
    inc_2: () => {
      const count = get().count;
      set({count: count + 1});
    },
    // store
    inc_3: () => {
        store.setState({count: store.getState().count + 1});
    },
    * */
}))

