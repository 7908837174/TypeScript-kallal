import React from "./react";
import { useState } from "react";
import { useBlog } from "../shared/BlogContext";
import { Blog } from "../types";

interface BlogFormProps {
  existingBlog?: Blog;
  onClose: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ existingBlog, onClose }) => {
  const { addBlog, updateBlog } = useBlog();
  const [title, setTitle] = useState(existingBlog?.title || '');
  const [content, setContent] = useState(existingBlog?.content || '');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(''); // Reset error state

    // Basic validation
    if (!title.trim() || !content.trim()) {
      setError('Title and content are required.');
      return;
    }

    // Prepare the blog data
    const blogData = { title, content };

    // Update or add blog based on existingBlog prop
    if (existingBlog) {
      updateBlog({ ...existingBlog, ...blogData });
    } else {
      addBlog(blogData);
    }

    // Close the form after submission
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

export default BlogForm;