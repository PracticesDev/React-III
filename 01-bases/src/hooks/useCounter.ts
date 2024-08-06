import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap";

const MAXIMUN = 10;


export const useCounter = () => {

    const [counter, setCounter] = useState(8)
    const counterRef = useRef<HTMLHeadingElement>(null)

    const handleClick = () => {

        setCounter(prev => Math.min(prev + 1, MAXIMUN))

    }

    useEffect(() => {

        if (counter < 10) return

        console.log("Counter es Mayor a 10.")

        const tl = gsap.timeline();

        tl.to(counterRef.current, { y: -10, duration: 0.2, ease: 'ease.out' })
        tl.to(counterRef.current, { y: 0, duration: 1, ease: 'bounce.out' })
        
    }, [counter])



  return {
    counter,
    handleClick,
    counterRef

  }
}


