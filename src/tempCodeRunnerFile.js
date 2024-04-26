import React, { useState } from 'react';
import HomePage from './HomePage';
import InputComponent from './InputComponent';

const App = () => {
  const [showInput, setShowInput] = useState(false);

  const handleScroll = () => {
    setShowInput(true);
  };

  const handleInputSubmit = (input) => {
    // Handle input submission here
    console.log("Submitted input:", input);
  };

  return (
    <div>
      {!showInput && <HomePage onScroll={handleScroll} />}
      {showInput && <InputComponent onSubmit={handleInputSubmit} />}
    </div>
  );
}

export default App;
