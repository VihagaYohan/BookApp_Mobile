import React, { Component,useEffect,useState } from 'react';

const useError = ()=>{
    const [error, setError] = useState(false);

    useEffect(()=>{
        setError(true)
    })

    return[error,setError]
}

export default useError;