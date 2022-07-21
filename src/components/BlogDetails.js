import { useParams, useHistory } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();
    console.log('>>>>>', data)

    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading article...</div>}
            { error && <div>{error}</div>}

            { data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Written by {data.author}</p>
                    <div>{data.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}

export default BlogDetails;