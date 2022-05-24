import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url: string) => {

    const [ data, setData ] = useState([]);
    const [ isDataLoading, setIsDataLoading ] = useState(true);
    
    
    useEffect(() => {
        axios.get(url).then(({data}: any) => {
            setData(data);
            setIsDataLoading(false);
        }).catch(err => {
            setIsDataLoading(false);
        })
    },[]);


    return {
        usersData: data,
        isDataLoading
    };

};



