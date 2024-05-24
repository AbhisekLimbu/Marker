import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';
import Navbar from './Navbar';

const Homepage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/storyform');
  };

  return (
    <div className="home-page">
      <header className="header">
        <h3>MARKER</h3>
      </header>
      <div>
        <Navbar />
      </div>
      <div className="document-journey-container">
        <button className="document-journey-button" onClick={handleButtonClick}>
          Document Your Journey
        </button>
      </div>
      <main className="main-content">
        <section className="latest-articles">
          <div className="articles-container">
            <div className="article-card">
              <img src="dallas1.jpg" alt="Irving" />
              <h1>Exploring Dallas Downtown Architecture</h1>
              <p>
                Dallas Downtown is renowned for its striking architecture that seamlessly blends historic and modern styles. The skyline is dominated by landmarks such as the Reunion Tower, with its distinctive spherical design, and the modernist style of the AT&T Performing Arts Center.
                <br />
                Walking through the streets of Downtown Dallas, you can witness a rich tapestry of architectural history. The Neoclassical designs of the early 20th century buildings stand proudly alongside sleek, glass skyscrapers that reflect the city's dynamic growth.
                <br />
                One notable example is the Old Red Museum, an architectural gem with its Romanesque Revival style, contrasting beautifully with the contemporary structures nearby. The art deco elements of the Mercantile National Bank Building further add to the architectural diversity.
              </p>
              
            </div>
          </div>
          <div className="articles-container">
            <div className="article-card">
              <img src="./Irving.jpg" alt="Irving" />
              <h1>Peddling in Summer</h1>
              <p>
                Irving, located in the heart of Texas, is a city known for its blend of urban sophistication and natural beauty.
                <br />
                One of the best ways to explore Irving is by peddling through its numerous scenic trails and parks. The Campion Trail is particularly popular, offering miles of picturesque paths along the Elm Fork and West Fork of the Trinity River. It's perfect for cyclists, joggers, and nature enthusiasts.
                <br />
                Peddling through Irving during the golden hour is an experience like no other. As the sun begins to set, the trails are bathed in a soft, golden light, enhancing the beauty of the surrounding landscapes. The serene environment, combined with the warm glow of the sunset, provides a tranquil escape from the bustling city life. Whether you’re a seasoned cyclist or just looking for a leisurely ride, Irving’s trails offer a perfect setting to unwind and connect with nature.
              </p>
            </div>
          </div>
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
