import React from 'react';
import './homepage.css';
import Navbar from './Navbar';

const Homepage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h3>MARKER</h3>
      </header>

      <div>
        <Navbar />
      </div>
      <main className="main-content">
        <div className='slogan'>
        </div>
        <section className="latest-articles">
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
        <p>writting a symphony</p>
      </footer>
     
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Homepage;
