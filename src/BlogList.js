import { Link } from 'react-router-dom';

// stateless functional component (uses the props passed down from higher components)
const BlogList = (props) => {
    const blogs = props.blogsEntries;
    const title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by: { blog.author }</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList;