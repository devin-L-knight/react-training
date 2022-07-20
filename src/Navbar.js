import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The React Test Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: "#f1256d",
                    borderRadius: '0.5rem'
                }}>New Article</Link>
            </div>
        </nav>
    )
}

export default Navbar