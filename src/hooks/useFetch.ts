import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {

    const [ rickData, setRickData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(response => setRickData(response.results))
        .catch(err => setIsLoading(false));
        setIsLoading(false);
    },[]);

    return {
        rickData,
        isLoading
    };
};

