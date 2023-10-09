import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';
function ResultPage() {
  return (
    <>
      <div className="resultpage_img">
        <span className="resuit_text">
          Готовьтесь к романтическим приключениям.
        </span>
        <div className="result_img"></div>
      </div>

      <Link to="/">
        <div className="homepage_button1"></div>
      </Link>
    </>
  );
}
export default ResultPage;
