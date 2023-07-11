// Home.js
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [postCount, setPostCount] = useState(0);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    // Retrieve the post count from local storage on component mount
    const storedPostCount = localStorage.getItem('postCount');
    if (storedPostCount) {
      setPostCount(parseInt(storedPostCount));
    }
  }, []);

  const handlePost = () => {
    if (inputText.trim() === '') {
      return;
    }

    const postKey = `post${postCount}`;

    // Create a new post entry in local storage
    localStorage.setItem(postKey, inputText);

    // Increment the post count modulo 10
    const newPostCount = (postCount + 1) % 10;
    setPostCount(newPostCount);

    // Update the post count in local storage
    localStorage.setItem('postCount', newPostCount.toString());

    setInputText('');
  };

  const handleDelete = () => {
    const deletePostCount = postCount === 0 ? 9 : postCount - 1;
    const deletePostKey = `post${deletePostCount}`;

    // Remove the corresponding post entry from local storage
    localStorage.removeItem(deletePostKey);

    // Update the post count in local storage
    localStorage.setItem('postCount', deletePostCount.toString());

    setPostCount(deletePostCount);
  };

  const handleDeleteAll = () => {
    // Clear all entries in local storage
    localStorage.clear();

    // Reset the post count
    setPostCount(0);
  };

  return (
    <div>
      <h1>POST AND SHOW</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
      <button onClick={handleDelete}>Delete One</button>
      <button onClick={handleDeleteAll}>Delete All</button>
    </div>
  );
};

export default Home;
    
