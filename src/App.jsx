import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import HomePage from './page/HomePage';
import InfoPage from './page/InfoPage';
import ResultPage from './page/ResultPage';

function App() {
  return (
    <>
      <ul className="menu">
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/.data">InfoPage</Link>
        </li>
        <li>
          <Link to="/.result">ResultPage</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/.data" element={<InfoPage />} />
        <Route path="/.result" element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
