import { useState, useEffect } from 'react'; // imports a react hook. (allows us to update a reactive value that is rendered on the page).
import BlogList from './BlogList';
// this is a stateless functional component
const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    const [name, setName] = useState('Bob')
    const [age, setAge] = useState(45);

    const handleClick = (e) => {
        setName('Jimmy')
        setAge(30);
    }

    useEffect(() => {
        // this setTimeout is just to simulate the time that would usually be spent fetching data from a database (shows our 'Loading...' message while the data would be loading)
        setTimeout(() => {

            // we make a fetch request to our DB here for our local host (the port where the data is being served)
            fetch('http://localhost:8000/blogs')
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
                    setBlogs(data); // sets the blogs based on the fetched data
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

    }, []);

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click Me</button>

            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogsEntries={blogs} title="All Blogs!" /> }

            {/* <BlogList blogsEntries={blogs.filter((blog) => blog.author === 'Bob')} title="Bob's Blogs:" handleDelete={handleDelete} /> */}
            <button onClick={() => setName('Jimmy-John')}>change name</button>
            <p>{ name }</p>
        </div>
    )
}

export default Home