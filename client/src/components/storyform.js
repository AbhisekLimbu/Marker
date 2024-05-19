import React, { useState } from 'react';

const StoryForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);
    formData.append('longitude', longitude);
    formData.append('latitude', latitude);

    const response = await fetch('/submit-story', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Story submitted successfully');
      setTitle('');
      setContent('');
      setImage(null);
      setLongitude('');
      setLatitude('');
    } else {
      alert('Failed to submit story');
    }
  };

  return (
    <div>
      <h1>Submit Your Story</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <br />

        <label htmlFor="longitude">Longitude:</label>
        <input
          type="text"
          id="longitude"
          name="longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="latitude">Latitude:</label>
        <input
          type="text"
          id="latitude"
          name="latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          required
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StoryForm;
