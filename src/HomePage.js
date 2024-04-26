// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link instead of useHistory
import './HomePage.css'; // Import the CSS file where you'll define additional styles
import imageSrc from './assets/logo2.png'; // Import the image file
import buttonImageSrc from './assets/in.png'; // Import the button image file
import Switch from "./Switch";

const HomePage = () => {
  return (
    <div className="homepage d-flex flex-column align-items-center justify-content-center">
      <img src={imageSrc} alt="Description of the image" className="img-fluid" />
      <Link to="/input" className="btn btn-link mt-3 custom-button"> {/* Use Link instead of button */}
        <img src={buttonImageSrc} alt="Button Image" className="button-img" />
      </Link>
    </div>
  );
}

export default HomePage;
