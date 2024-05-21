  import React from 'react';
  import './homepage.css';

  const Homepage = () => {
    return (
      <div className="home-page">
        <header className="header">
          <h3>MARKER</h3>
          <div className='slogan'>
            <p>TELL YOUR STORY</p>
          </div>
        </header>
        <main className="main-content">
          <section className="latest-articles">
            <div className="articles-container">
              <div className="article-card">
                <img src="./assets/pictureone.jpg" alt="Bouddhanath" />
                <h3>Bouddhanath</h3>
                <p>
              
                  Bouddhanath, itlocated in Kathmandu, Nepal, is one of the largest stupas in the world and a significant pilgrimage site for Buddhists. 
                  <br>
                  </br>Its imposing white dome and golden spire rise above the bustling streets, creating a serene and spiritual atmosphere. Surrounding the stupa are colorful prayer flags, fluttering in the wind and carrying prayers for peace and compassion. Pilgrims and visitors alike circumambulate the stupa, spinning prayer wheels and chanting mantras, while monks and devotees offer butter lamps and prayers. The rich cultural heritage and religious significance of Bouddhanath make it a must-visit destination for anyone seeking spiritual enlightenment and cultural immersion in Nepal.
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <p>Building a Bridge Between Past and Future</p>
        </footer>
      </div>
    );
  };

  export default Homepage;
