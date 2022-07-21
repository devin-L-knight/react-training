import { useState, useEffect } from 'react';

// This is a custom hook. (always use the 'use' name prefix when creating a custom hook...ex: 'useFetch')
const useFetch = (url) => {
    const abortCont = new AbortController();

    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // this setTimeout is just to simulate the time that would usually be spent fetching data from a database (shows our 'Loading...' message while the data would be loading)
        setTimeout(() => {

            // we make a fetch request to our DB here for our local host (the port where the data is being served)
            fetch(url, { signal: abortCont.signal })
                .then( res => {
                    // console.log(res);
                    if (!res.ok) {
                        throw Error('Unable to fetch data for this resource')
                    }
                    // we will need to parse our response into a JSON
                    return res.json()
                })
                .then( data => {
                    // here we get the data from the fetch response
                    setData(data); // sets the data based on what is fetched (ex: the blogs, etc.);
                    setisPending(false);    // updates the pending message state to be false
                    setError(null);
                })
                .catch( error => {
                    if (error.name === 'AbortError') {
                        console.log('fetch aborted.')
                    } else {
                        setError(error.message);  // update our state to include the error message
                        setisPending(false);    // updates the pending message state to be false
                    }
                })

        }, 1200)

        // return () => abortCont.abort(); // This aborts whatever fetch that's in motion that needs to be paused if a user has moved away from a page.
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;