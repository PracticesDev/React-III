import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap";

const MAXIMUN = 10;

const CounterEffect = () => {

    const [counter, setCounter] = useState(8)
    const counterRef = useRef<HTMLHeadingElement>(null)

    const handleClick = () => {

        setCounter(prev => Math.min(prev + 1, MAXIMUN))

        // if (counter < 10) {
        //     setCounter(counter + 1)
        // }
        // else{
        //     console.log("Counter es Mayor a 10.")
        // }
    }

    useEffect(() => {

        if (counter < 10) return

        console.log("Counter es Mayor a 10.")

        const tl = gsap.timeline();

        tl.to(counterRef.current, { y: -10, duration: 0.2, ease: 'ease.out' })
        tl.to(counterRef.current, { y: 0, duration: 1, ease: 'bounce.out' })
        
    }, [counter])


    return (
        <div>
            <h1>Counter Effect: </h1>
            <h2 ref={counterRef}>{counter}</h2>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}

export default CounterEffect
