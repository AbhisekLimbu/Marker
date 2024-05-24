import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h3>MARKER</h3>
      </header>

      <Navbar />

      <main className="main-content">
        <div className="content-container">
          <div className="image-container">
            <img src="./about.jpg" alt="Local Stories" className="article-image" />
          </div>
          <div className="text-container">
            <div className="article-text">
              
              <h1>Architectural Insights</h1>
              <p>
                Here at MARKER, we delve into the perspectives of architecture students, uncovering their thoughts on their current projects, their creative processes, and their reflections on historical buildings. Explore the insights of the next generation of architects as they share their journeys and visions.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>writing a symphony</p>
      </footer>

      <Navbar />

      <style>
        {`
          .home-page, .header, .footer, .main-content {
            background: white;
          }

          .content-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            height: calc(100vh - 160px);
            max-width: 1400px;
            margin: 0 auto;
            overflow: hidden;
          }

          .image-container {
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }

          .article-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .image-container:hover .article-image {
            transform: scale(1.05);
          }

          .text-container {
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.9);
          }

          .article-text {
            text-align: center;
            max-width: 600px;
          }

          .article-text h1 {
            font-size: 2.5rem;
            font-weight: normal;
            line-height: 1.4;
            color: #333;
            margin: 0;
            margin-bottom: 1rem;
          }

          .article-text p {
            font-size: 1.25rem;
            line-height: 1.6;
            color: #666;
            margin-bottom: 1rem;
          }

          .header {
            text-align: center;
            padding: 1rem;
            background: white;
          }

          .footer {
            text-align: center;
            padding: 1rem;
            background: white;
          }

          @media (max-width: 768px) {
            .content-container {
              flex-direction: column;
              height: auto;
            }

            .image-container,
            .text-container {
              flex: none;
              width: 100%;
              height: auto;
            }

            .article-text {
              padding: 2rem;
            }

            .article-text h1 {
              font-size: 1.5rem;
            }

            .article-text p {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;
