import React from 'react';
import { useLocation } from 'react-router-dom';
import loginImage from '../assets/Login.jpeg';
import regImage from '../assets/RegImage.jpeg';
import aboutImage from '../assets/aboutImage.jpeg';
import watchlistImage from '../assets/watchImage.jpeg';
import contactImage from '../assets/contactImage.jpeg';
import feedbackImage from '../assets/feedbackImage.jpeg';
import homeImage from '../assets/homeImage.jpeg';



const BackgroundWrapper = ({ children }) => {
  const location = useLocation();
  const getBackgroundImage = () => {
    switch (location.pathname) {
      case '/login': return loginImage;
      case '/signup': return regImage;
      case '/about': return aboutImage;
      case '/contact': return contactImage;
      case '/feedback': return feedbackImage;
      case '/watchlist': return watchlistImage;
      default: return homeImage;    
    }
  };

  return (
    <div
      style={{
        background: `url(${getBackgroundImage()}) center/cover fixed`,
        color: 'var(--light)'
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;