import { useState } from "react"



export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementar = ( num: number = 1 ):void => {
        setCounter(counter + num)
    }

    return (
        <div>
            <h3>Counter</h3>
            <span>Valor: {counter}</span>
            <button
                onClick={()=>incrementar()}>
                +1
            </button>
            <button
                onClick={()=>incrementar(5)}>
                +2
            </button>
            <button
                onClick={()=>setCounter(0)}>
                Reset
            </button>
        </div>
    )
}
