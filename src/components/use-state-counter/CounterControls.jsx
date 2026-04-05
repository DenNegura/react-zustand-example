function CounterControls({increment, decrement, reset}) {

    console.log("use-state-counter/CounterControls rendered");

    return (
        <div className="counter-controls">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export {CounterControls};