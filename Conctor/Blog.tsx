import React, { useState } from "react";
import { useBlog } from "../shared/BlogContext"; // Adjust the import path as necessary
import { Blog } from "../types"; // Adjust the import path as necessary

interface ArticleListProps {
    onEdit: (blog: Blog) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ onEdit }) => {
    const { blogs, deleteBlog } = useBlog(); // Assuming useBlog provides blogs and deleteBlog function

    return (
        <div>
            {blogs.map((blog) => (
                <div key={blog.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                    <button onClick={() => onEdit(blog)}>Edit</button>
                    <button onClick={() => deleteBlog(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

const BlogForm: React.FC<{ existingBlog?: Blog; onClose: () => void; }> = ({ existingBlog, onClose }) => {
    const { addBlog, updateBlog } = useBlog();
    const [title, setTitle] = useState(existingBlog?.title || '');
    const [content, setContent] = useState(existingBlog?.content || '');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (!title.trim() || !content.trim()) {
            setError('Title and content are required.');
            return;
        }

        const blogData = { title, content };

        if (existingBlog) {
            updateBlog({ ...existingBlog, ...blogData });
        } else {
            addBlog(blogData);
        }

        onClose();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Content:
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </label>
                <br />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

const BlogManager: React.FC = () => {
    const { blogs } = useBlog();
    const [isEditing, setIsEditing] = useState<Blog | null>(null);

    const handleEdit = (blog: Blog) => {
        setIsEditing(blog);
    };

    const handleClose = () => {
        setIsEditing(null);
    };

    return (
        <div>
            <h1>Blog Manager</h1>
            <ArticleList onEdit={handleEdit} />
            {isEditing && <BlogForm existingBlog={isEditing} onClose={handleClose} />}
        </div>
    );
};

export default BlogManager;

 