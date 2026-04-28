
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LangProvider } from './context/LangContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';

function App() {
  return (
    <LangProvider>
      <Router>
        <div className="min-h-screen bg-white text-text-dark font-sans flex flex-col font-cairo">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Additional pages could be added here later */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </LangProvider>
  );
}

export default App;
