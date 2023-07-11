// ViewAll.js
import React, { useState, useEffect } from 'react';

const ViewAll = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Retrieve the post count from local storage
    const storedPostCount = localStorage.getItem('postCount');

    // Iterate through the posts and retrieve them from local storage
    const retrievedPosts = [];
    for (let i = 0; i < 10; i++) {
      const postKey = `post${i}`;
      const postContent = localStorage.getItem(postKey);
      if (postContent) {
        retrievedPosts.push({
          count: i,
          content: postContent,
        });
      }
    }

    setPosts(retrievedPosts);
  }, []);

  return (
    <div>
      <h1>VIEW ALL</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.count}>
            <strong>COUNT:</strong> {post.count}
            <br />
            <strong>POST:</strong> {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewAll;
