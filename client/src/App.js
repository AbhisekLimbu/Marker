import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import About  from './components/About';
import StoryForm from './components/storyform';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/storyform" element={<StoryForm />} />
        <Route path="/About" element={<About />} />


      </Routes>
    </Router>
  );
};

export default App;
