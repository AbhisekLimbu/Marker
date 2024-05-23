import React from 'react';

const Navbar = () => {
  return (
    <>
      <style>
        {`
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
            font-weight: bold !important;
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
        <button>Stories</button>
        <button>Gallery</button>
        <button>About</button>
      </nav>
    </>
  );
};

export default Navbar;
