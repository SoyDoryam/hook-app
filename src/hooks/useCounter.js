import { useState } from "react"

export const useCounter = (initialValue = 10, value = 1) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter( counter + value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    const decrement = (value = 1) => {
        if (counter === 0 ) return;
        setCounter( counter - value );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}