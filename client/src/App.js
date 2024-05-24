import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage'; 
import StoryForm from './components/storyform';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<HomePage />} /> {/* Make sure HomePage is properly invoked */}
          <Route path="/submit" element={< StoryForm />} />
          <Route path="/About" element={<About/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
