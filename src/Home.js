import { useState } from 'react'; // imports a react hook. (allows us to update a reactive value that is rendered on the page).
import BlogList from './BlogList';
// this is a stateless functional component
const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Bob', id: 1},
        { title: 'The welcome party!', body: 'lorem ipsum...', author: 'Jimmy', id: 2},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Jane', id: 3},
        { title: 'Training with React', body: 'lorem ipsum...', author: 'Bob', id: 4}
    ])

    const [name, setName] = useState('Bob')
    const [age, setAge] = useState(45);

    const handleClick = (e) => {
        setName('Jimmy')
        setAge(30);
    }

    const handleDelete = (id) => {
        // we're going to create a new, filtered array.
        // This approach means the original state remains unchanged.
        const newBlogs = blogs.filter(blog => blog.id !== id);;

        setBlogs(newBlogs); // uses a hook via useState to update values of the new array
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click Me</button>
            <BlogList blogsEntries={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <BlogList blogsEntries={blogs.filter((blog) => blog.author === 'Bob')} title="Bob's Blogs:" handleDelete={handleDelete} />
        </div>
    )
}

export default Home