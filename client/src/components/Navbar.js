import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

          .navbar {
            background: white;
            list-style: none;
            padding: 1rem;
            display: flex;
            justify-content: center;
            gap: 1rem;
          }

          .navbar button {
            padding: 15px !important;
            background: white; /* Override the green gradient background */
            color: black !important; /* Override the text color */
            border: none !important;
            border-radius: 8px !important;
            font-size: 18px !important;
            font-weight: 300 !important; /* Use a lighter font weight */
            cursor: pointer !important;
            transition: background 0.3s ease, transform 0.3s ease !important;
            font-family: 'Roboto', sans-serif !important; /* Use the Roboto font */
          }

          .navbar button:hover {
            background: #f0f0f0 !important; /* Ensure hover background is gray */
            color: black !important;
          }
        `}
      </style>
      <nav className="navbar">
        <Link to="/story"><button>Story</button></Link>
        <Link to="/gallery"><button>Gallery</button></Link>
        <Link to="/about"><button>About</button></Link>
      </nav>
    </>
  );
};

export default Navbar;
