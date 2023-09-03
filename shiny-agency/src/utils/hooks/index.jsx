import { useEffect, useState } from "react";


export function useFetch(url){
    const [data, setData] = useState({});
    const [isDataLoading, setIsDataLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect( ()=> {
        if (!url) return;

        setIsDataLoading(true);

        async function fetchData(){
            try {
                const response = await fetch(url);
                const data = await response.json();

                setData(data)
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setIsDataLoading(false);
            }
        }
        fetchData()
    }, [url]);

    return {isDataLoading, data, error};
}
