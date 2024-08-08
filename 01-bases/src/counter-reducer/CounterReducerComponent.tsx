import { useReducer } from "react"
import { CounterState } from "./interfaces/interface"
import { counterReducer } from "./state/counterreducer"
import { doIncreaseBy, doReset } from "./actions/action"



const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}


const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => {
        dispatch(doReset())
    }
    const increaseBy = (value: number) => {
        dispatch( doIncreaseBy(value))
    }

    return (
        <div>
            <h1>Counter Reducer Refactorizado:</h1>
            <pre>
                {JSON.stringify(counterState, null, 2)}
            </pre>
            <button onClick={() => increaseBy(1)}>+1</button>
            <button onClick={() => increaseBy(5)}>+5</button>
            <button onClick={() => increaseBy(10)}>+10</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default CounterReducerComponent
