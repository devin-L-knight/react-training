import { useState } from 'react'; // imports a react hook. (allows us to update a reactive value that is rendered on the page).

// this is a stateless functional component
const Home = () => {

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
        </div>
    )
}

export default Home