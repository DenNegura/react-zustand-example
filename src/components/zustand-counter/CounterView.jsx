import {useCounterStore} from "../../store/useCounterStore.js";

function CounterView() {

    const count = useCounterStore(state => state.count)

    console.log("zustand-counter/CounterView rendered");

    return (
        <div className="counter-view">
            <p>Count: {count}</p>
        </div>
    )
}

export {CounterView};