import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';
function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage_img"></div>
      <button>
        <Link to="/.data">InfoPage</Link>{' '}
      </button>
    </div>
  );
}
export default HomePage;
