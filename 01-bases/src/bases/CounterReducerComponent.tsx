import { useReducer } from "react"

interface CounterState {
    counter: number,
    previous: number,
    changes: number
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}

type CounterAction =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }


const counterReducer = (state: CounterState, action: CounterAction): CounterState => { // TS :CounterState => quiere decir valor de retorno de la funcion
    switch (action.type) {
        case 'reset':
            return {
                counter: 10,
                previous: 15,
                changes: 20
            }

        default:
            return state;
    }

}

const CounterReducerComponent = () => {

    const [{counter}, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleClick = () => {
         dispatch({ type:'reset' })
       
    }


    return (
        <div>
            <h1>Counter Reducer: {counter}</h1>
            <button onClick={handleClick}>Reset</button>
        </div>
    )
}

export default CounterReducerComponent
