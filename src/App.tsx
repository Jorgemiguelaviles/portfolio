import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/iniciation';
import ContenteMain from './pages/conteentMain';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define a rota para o componente Intro */}
          <Route path="/" element={<Intro />} />

          {/* Define a rota para o componente ContenteMain */}
          <Route path="/content" element={<ContenteMain />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
