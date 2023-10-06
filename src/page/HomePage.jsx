import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';
function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage_title"></div>
      <div className="homepage_img"></div>
      <Link to="/.data">
        <div className="homepage_button"></div>
      </Link>
    </div>
  );
}
export default HomePage;
