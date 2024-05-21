import React, { useState } from 'react';
import './storyform.css';

const StoryForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);
    formData.append('location', location);

    // const response = await fetch('localohost://3001/localstory', {
    //   method: 'POST',
    //   body: formData,
    // });
    const response = await fetch('http://localhost:3001/localstory', {
  method: 'POST',
  body: formData,
});

    if (response.ok) {
      alert('Story submitted successfully');
      setTitle('');
      setContent('');
      setImage(null);
      setLocation('');
    } else {
      alert('Failed to submit story');
    }
  };

  return (
    <div className="container">
      <h1>TELL YOUR STORY</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ width: '100%' }}
        />

        <button type="submit">POST</button>
      </form>
    </div>
  );
};

export default StoryForm;
