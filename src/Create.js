const CreateBlog = () => {
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title: </label>

                <input
                    type="text"
                    required
                />

                <label>Article body:</label>

                <textarea
                    required
                ></textarea>

                <label>Blog author:</label>
                <select>
                    <option value="Bob">Bob</option>
                    <option value="Jimmy">Jimmy</option>
                    <option value="Jane">Jane</option>
                </select>
                <button>Post Article</button>
            </form>
        </div>
    )
}

export default CreateBlog;