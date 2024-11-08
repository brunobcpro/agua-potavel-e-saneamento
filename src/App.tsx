// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewPage from './pages/NewPage'; // Nova página que vamos criar

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/nova-pagina" element={<NewPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
