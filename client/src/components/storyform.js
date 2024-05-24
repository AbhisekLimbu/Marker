import React, { useState } from 'react';
import './storyform.css';

const StoryForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setImagePreview(null);
    }
  };

  const handleDiscardImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title); 
    formData.append('content', content);
    formData.append('image', image);
    formData.append('location', location);

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
      setImagePreview(null);
    } else {
      alert('Failed to submit story');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        {imagePreview && (
          <div className="image-preview-container">
            <img src={imagePreview} alt="Selected" className="image-preview" />
            <button type="button" onClick={handleDiscardImage}>Discard</button>
          </div>
        )}

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
