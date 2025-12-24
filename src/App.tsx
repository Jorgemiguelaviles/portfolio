import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SectionStart from './pages';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define a rota para o componente Intro */}
          <Route path="/" element={<SectionStart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
