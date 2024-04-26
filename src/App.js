// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import InputComponent from './InputComponent';

const App = () => {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Router */}
        {/* Define route for the home page */}
        <Route path="/" element={<HomePage />} /> {/* Use element prop to render components */}
        
        {/* Define route for the input page */}
        <Route path="/input" element={<InputComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
