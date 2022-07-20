// this is a stateless functional component
const Home = () => {

    const handleClick = () => {
        console.log('CLICKED');
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Home