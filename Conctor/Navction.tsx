import React, { useState, createContext, ReactNode } from 'react';
import { IoMdAddCircle } from 'react-icons/io';

// Define the Blog interface
interface Blog {
    id: number;
    title: string;
    content: string;
    // Add other properties as needed
}

// Define the context type
interface BlogContextType {
    blogs: Blog[];
    addBlog: (blog: Blog) => void;
    updateBlog: (blog: Blog) => void;
    deleteBlog: (blog: Blog) => void;
}

// Create the context
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Define the provider component
const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    // Function to add a blog
    const addBlog = (blog: Blog) => {
        setBlogs(prevBlogs => [...prevBlogs, blog]);
    };

    // Function to update a blog
    const updateBlog = (updatedBlog: Blog) => {
        setBlogs(prevBlogs => prevBlogs.map(blog => 
            blog.id === updatedBlog.id ? updatedBlog : blog
        ));
    };

    // Function to delete a blog
    const deleteBlog = (blogToDelete: Blog) => {
        setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== blogToDelete.id));
    };

    // Value to be passed to the context provider
    const value: BlogContextType = {
        blogs,
        addBlog,
        updateBlog,
        deleteBlog
    };

    return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

// Placeholder for navigation component
const Navigation: React.FC = () => {
    return <nav>Navigation</nav>;
};

// Main App component
const App: React.FC = () => {
    return (
        <BlogProvider>
            <Navigation />
            <div className="flex justify-center">
                <section className="mx-auto p-6">
                    <div>
                        <button className="ml-[7rem] bg-black justify-center items-center text-center text-white px-4 py-2 rounded mb-4">
                            Add new Blog <IoMdAddCircle className="ml-[.5rem]" /> 
                        </button>
                    </div>
                </section>
            </div>
        </BlogProvider>
    );
};

export { BlogContext, BlogProvider, App };