import {useState, useEffect, useRef} from 'react'

export const useFetch = (url) => {
    const initialState = { data: null, loading:true, error: null};
    const isMounted = useRef(true);

    const [state, setState] = useState(initialState)

    useEffect(() => {        
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        setState(initialState);
        fetch(url)
            .then(response => response.json())
            .then(data => { 
                if(isMounted.current) {
                    setState({
                        data: data, loading:false, error: null
                    });
                }           
                
            })
            .catch((error) => {
                if(isMounted.current) {
                    setState({
                        data: null, loading:false, error: error
                    });
                }
            });

    }, [url]);

    return state;

}
