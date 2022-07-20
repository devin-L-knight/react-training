import { useState } from 'react'; // imports a react hook. (allows us to update a reactive value that is rendered on the page).
import BlogList from './BlogList';
import useFetch from './useFetch';

// this is a stateless functional component
const Home = () => {

    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');

    const [name, setName] = useState('Bob')
    const [age, setAge] = useState(45);

    const handleClick = (e) => {
        setName('Jimmy')
        setAge(30);
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click Me</button>

            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div> }
            { data && <BlogList blogsEntries={data} title="All Blogs!" /> }

            {/* <BlogList blogsEntries={blogs.filter((blog) => blog.author === 'Bob')} title="Bob's Blogs:" handleDelete={handleDelete} /> */}
            <button onClick={() => setName('Jimmy-John')}>change name</button>
            <p>{ name }</p>
        </div>
    )
}

export default Home