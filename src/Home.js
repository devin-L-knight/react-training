import { useState } from 'react'; // imports a react hook. (allows us to update a reactive value that is rendered on the page).

// this is a stateless functional component
const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Bob', id: 1},
        { title: 'The welcome party!', body: 'lorem ipsum...', author: 'Jimmy', id: 2},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Jane', id: 3}
    ])

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
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                </div>
            ))}
        </div>
    )
}

export default Home