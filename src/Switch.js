// Switch.js

import React from 'react';
import './Switch.css';

const Switch = ({ checked, onChange }) => {
  return (
    <div className="switch-container">
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className="react-switch-text" style={{fontSize:"25px", color : 'red', fontWeight: "bold" }}>N-V</span>
        <span className={`react-switch-button`} />
        <span className="react-switch-text" style={{fontSize:"25px", color : 'Green', fontWeight: "bold" }}>Veg</span>
      </label>
    </div>
  );
};

export default Switch;
