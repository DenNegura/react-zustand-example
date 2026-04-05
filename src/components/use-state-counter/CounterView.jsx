function CounterView({count}) {

    console.log("use-state-counter/CounterView rendered");

    return (
        <div className="counter-view">
            <p>Count: {count}</p>
        </div>
    )
}

export {CounterView};