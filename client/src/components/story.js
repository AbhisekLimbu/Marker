import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './homepage.css';
import Navbar from './Navbar';

const Homepage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Fetch stories from the backend when the component mounts
    const fetchStories = async () => {
      try {
        const response = await axios.get('http://localhost:3001/stories');
        setStories(response.data);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };
    fetchStories();
  }, []); // Empty dependency array to run only once on mount

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
                <img src={story.image} alt={story.title} />
                <div className="article-details">
                  <h1>{story.title}</h1>
                  <p className="article-location">📍 {story.location}</p>
                  <p>{story.content}</p>
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

export default Homepage;
