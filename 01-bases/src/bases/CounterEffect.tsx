import { useEffect, useState } from "react"

const MAXIMUN = 8;

const CounterEffect = () => {

    const [counter, setCounter] = useState(8)

    const handleClick = () => {


        setCounter(counter === MAXIMUN ? counter + 1 : counter - 1)
        // if (counter < 10) {
        //     setCounter(counter + 1)
        // }
        // else{
        //     console.log("Counter es Mayor a 10.")
        // }


    }

    useEffect(() => {

        if (counter <= 10) {
            return
        };
        console.log("Counter es Mayor a 10.")

    }, [counter])


    return (
        <div>
            <h1>Counter Effect: {counter}</h1>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}

export default CounterEffect
