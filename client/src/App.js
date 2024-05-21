import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage'; 
import StoryForm from './components/storyform';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<HomePage />} /> {/* Make sure HomePage is properly invoked */}
          <Route path="/submit" element={< StoryForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
