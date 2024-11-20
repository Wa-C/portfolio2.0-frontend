// src/components/Blog.js
import React from 'react';
import { useSelector } from 'react-redux';

function Blog() {
  const posts = useSelector((state) => state.blog?.posts || []);

  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
            </li>
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </ul>
    </div>
  );
}

export default Blog;
