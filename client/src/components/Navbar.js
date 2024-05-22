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
            background-color: white;
            border: none;
            color: black;
            padding: 0.5rem 1rem;
            cursor: pointer;
            transition: background-color 0.3s, color 0.3s;
          }

          .navbar button:hover {
            background-color: #f0f0f0; /* Slightly gray background on hover */
            color: black;
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
