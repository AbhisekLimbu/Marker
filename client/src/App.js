import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import About from './components/About';
import StoryForm from './components/storyform';
import Story from './components/story'; // Corrected import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/storyform" element={<StoryForm />} />
        <Route path="/about" element={<About />} /> {/* Corrected path */}
        <Route path="/story" element={<Story />} /> {/* Corrected usage */}
      </Routes>
    </Router>
  );
};

export default App;
