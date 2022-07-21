import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateBlog = () => {

    // we need to set-up some state to track the title and data that is entered into our form.
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Bob');
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();   // invoke the history hook (react router-dom)

    // create an event handle to support actual form submision.
    const handleSubmit = (evt) => {
        evt.preventDefault();   // prevent the page from refreshing when clicking submit

        const article = { title, body, author };
        console.log(article);

        setIsPending(true)

        // create a new fetch request to update the Server (we'll use a POST request for this);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(article)
            }).then(() => {
                console.log('Article Added!');
                setIsPending(false);
                history.push('/');  // this will bring the user back to the home page
            })
        }, 1000)
    }

    return (
        <div className="create">
            <h2>Add a New Article</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>

                <input
                    type="text"
                    required
                    value={title}
                    onChange={(evt) => setTitle(evt.target.value)}
                />

                <label>Article body:</label>

                <textarea
                    required
                    onChange={(evt) => setBody(evt.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(evt) => setAuthor(evt.target.value)}
                >
                    <option value="Bob">Bob</option>
                    <option value="Jimmy">Jimmy</option>
                    <option value="Jane">Jane</option>
                    <option value="Devin">Devin</option>
                    <option value="Z">Z</option>
                    <option value="Mochiko">Mochiko</option>
                </select>
                { !isPending && <button>Post Article</button> }
                { isPending && <button>Publishing Article...</button> }
            </form>
        </div>
    )
}

export default CreateBlog;