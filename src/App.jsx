import { Route, Routes } from 'react-router';
import HomePage from './page/HomePage';
import InfoPage from './page/InfoPage';
import ResultPage from './page/ResultPage';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/.data" element={<InfoPage />} />
        <Route path="/.result" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
