// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewPage from './pages/NewPage'; 
import Desperdicio from './pages/Desperdicio'; // Use a capitalização correta


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nova-pagina" element={<NewPage />} />
          <Route path="/ass" element={<Desperdicio />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
