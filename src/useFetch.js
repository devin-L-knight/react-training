import { useState, useEffect } from 'react';

// This is a custom hook. (always use the 'use' name prefix when creating a custom hook...ex: 'useFetch')
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // this setTimeout is just to simulate the time that would usually be spent fetching data from a database (shows our 'Loading...' message while the data would be loading)
        setTimeout(() => {

            // we make a fetch request to our DB here for our local host (the port where the data is being served)
            fetch(url)
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
                    setError(error.message);  // update our state to include the error message
                    setisPending(false);    // updates the pending message state to be false

                    // here we'll console out any kind of network error
                    console.log(error.message);
                })

        }, 1500)

    }, [url]);

    return { data, isPending, error }
}

export default useFetch;