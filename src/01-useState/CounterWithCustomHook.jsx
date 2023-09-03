import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    const { counter } = useCounter();

    return (
        <>
            <h1>Counter with Hppk: {counter}</h1>

            <hr />

            <button 
                className="btn btn-primary"
                onClick={() => counter(counter)}
            >+1</button>
            <button className="btn btn-primary">reset</button>
            <button className="btn btn-primary">-1</button>
        </>
    )
}
