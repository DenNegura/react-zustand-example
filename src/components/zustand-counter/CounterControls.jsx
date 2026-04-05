import {useCounterStore} from "../../store/useCounterStore.js";

function CounterControls() {

    const increment = useCounterStore(state => state.increment)
    const decrement = useCounterStore(state => state.decrement)
    const reset = useCounterStore(state => state.reset)

    console.log("zustand-counter/CounterControls rendered");

    return (
        <div className="counter-controls">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export {CounterControls};