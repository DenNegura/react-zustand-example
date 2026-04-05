import {useState} from "react";
import {CounterView} from "./CounterView.jsx";
import {CounterControls} from "./CounterControls.jsx";
import "./index.css"

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    console.log("use-state-counter/Counter rendered");

    return (
        <div className="counter">
            <CounterView count={count}/>
            <CounterControls
                increment={increment}
                decrement={decrement}
                reset={reset}/>
        </div>
    )
}

export {Counter};