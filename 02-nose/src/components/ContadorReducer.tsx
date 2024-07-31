import { useReducer } from "react"

const initialState = {
    contador: 0
}

type ActionType =
    | { type: 'increment' }
    | { type: 'custom', payload: number }



const contadorReducer = (state: typeof initialState, action: ActionType) => {

    switch (action.type) {
        case 'increment':
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'custom':
            return {
                ...state,
                contador: action.payload
            }
        default:
            return state
    }

}


export const ContadorReducer = () => {

    const [contadorState, dispatch] = useReducer(contadorReducer, initialState)

    return (
        <>
            <div>ContadorReducer</div>
            <h3>Contador: {contadorState.contador} </h3>
            <button onClick={() => dispatch({ type: 'increment' })}>1</button>
            <button onClick={() => dispatch({ type: 'custom', payload: 100 })}>100</button>
        </>
    )
}
