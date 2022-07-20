import { useState } from 'react';

const CreateBlog = () => {

    // we need to set-up some state to track the title and data that is entered into our form.
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Bob')

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
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
                </select>
                <button>Post Article</button>
                {/* <p>Draft Title:  {title}</p>
                <p>Selected Author: {author}</p>
                <p>Draft Text: {body}</p> */}
            </form>
        </div>
    )
}

export default CreateBlog;