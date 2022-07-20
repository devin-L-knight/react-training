
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The React Test Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: "#f1256d",
                    borderRadius: '0.5rem'
                }}>New Entry</a>
            </div>
        </nav>
    )
}

export default Navbar