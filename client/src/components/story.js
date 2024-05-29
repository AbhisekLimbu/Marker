import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './homepage.css';
import Navbar from './Navbar';

const Story = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get('http://localhost:3001/story');
        setStories(response.data);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };
    fetchStories();
  }, []); // Empty dependency array to run only once on mount

  const deleteStory = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/story/${id}`);
      // Update the stories state to remove the deleted story
      setStories(stories.filter(story => story._id !== id));
    } catch (error) {
      console.error('Error deleting story:', error);
    }
  };

  return (
    <div className="home-page">
      <header className="header">
        <h3>stories</h3>
      </header>
      <div>
        <Navbar />
      </div>
     
      <main className="main-content">
        <section className="latest-articles">
          {stories.map(story => (
            <div className="articles-container" key={story._id}>
              <div className="article-card">
                <img src={`http://localhost:3001/${story.image}`} alt={story.title} />
                <div className="article-details">
                  <h1>{story.title}</h1>
                  <p className="article-location">📍 {story.location}</p>
                  <p>{story.content}</p>
                  <button onClick={() => deleteStory(story._id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer className="footer">
        <p>Writing a symphony</p>
      </footer>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Story;
