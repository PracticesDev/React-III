import { useState } from "react"

interface Props {

    initialValue?: number
}

interface CounterState {
    counter: number,
    clicks: number,
}

const CounterBy = ({ initialValue = 5 }: Props) => {

    const [counterState, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0,

    })

    const { clicks, counter } = counterState;


    const handleClick = (value: number) => {

        setCounterState
            (({counter,clicks}) => ({
                counter: counter + value,
                clicks: clicks + 1
            }))
    }

    return (
        <div>
            <h1>CounterBy: {counter}</h1>
            <h1>Clicks: {clicks}</h1>
            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </div>
    )
}

export default CounterBy
