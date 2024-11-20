// src/components/Blog.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogPosts } from '../actions/blogActions';

function Blog() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  if (loading) return <p>Loading blog posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
