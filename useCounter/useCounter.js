import {useState} from 'react'

export default function useCounter(initialState = 10) {
    const [state, setstate] = useState(initialState);

    const incremental = ( factor = 2 ) => {
        setstate( state + factor );
    }

    const decremental = (factor = 2) => {
        setstate( state - factor );
    }

    const reset = () => {
        setstate( initialState );
    }

    return {
        state,
        incremental,
        decremental,
        reset
    }
}
