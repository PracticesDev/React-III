import { useCounter } from "../hooks/useCounter"

const CounterHook = () => {

    const {counter,counterRef,handleClick} = useCounter();
    
    return (
        <div>
            <h1>Counter Hook: </h1>
            <h2 ref={counterRef}>{counter}</h2>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}

export default CounterHook
