import { useReducer } from "react"
import { doDiv, doMult, doSub, doSum } from "./actions/action"
import { CounterCalculator } from "./interfaces/interface"
import counterReducerCalculator from "./state/counterReducerCalculator"


const INITIAL_STATE: CounterCalculator = {
    counterSum: 10,
    counterSub: 10,
    counterMult: 10,
    counterDiv: 10,

}


const CounterReducerCalculator = () => {

    const [counterState, dispatch] = useReducer(counterReducerCalculator, INITIAL_STATE)

    const Sum = (value: number) => {
        dispatch(doSum(value))
    }
    const Sub = (value: number) => {
        dispatch(doSub(value))
    }
    const Mult = (value: number) => {
        dispatch(doMult(value))
    }
    const Div = (value: number) => {
        dispatch(doDiv(value))
    }

    return (
        <div>
            <h1>Counter Reducer Calculator:</h1>
            <pre>
                {JSON.stringify(counterState, null, 2)}
            </pre>
            <button onClick={() => Sum(1)}>+1</button>
            <button onClick={() => Sub(1)}>-1</button>
            <button onClick={() => Mult(2)}>*2</button>
            <button onClick={() => Div(2)}>/2</button>

        </div>
    )
}

export default CounterReducerCalculator
