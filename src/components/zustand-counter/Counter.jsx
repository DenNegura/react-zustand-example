import {CounterView} from "./CounterView.jsx";
import {CounterControls} from "./CounterControls.jsx";
import './index.css'

function Counter() {

    console.log("zustand-counter/Counter rendered");

    return (
        <div className="counter">
            <CounterView/>
            <CounterControls/>
        </div>
    )
}

export {Counter};