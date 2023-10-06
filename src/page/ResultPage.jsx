import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';
function ResultPage() {
  return (
    <>
      <div className="resultpage_img"></div>

      <Link to="/">
        <div className="homepage_button1"></div>
      </Link>
    </>
  );
}
export default ResultPage;
