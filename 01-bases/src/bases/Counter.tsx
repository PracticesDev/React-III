import { useState } from "react"

interface Props {

    initialValue: number
    //initialValue?:number Opcional

}

const Counter = ({ initialValue = 0 }: Props) => {

    const [counter, setCounter] = useState(initialValue)

    const handleClick = () => {

        setCounter(counter + 1)
    }


    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}

export default Counter
