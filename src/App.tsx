
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LangProvider } from './context/LangContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import AboutPage from './pages/AboutPage';
import OurWorkPage from './pages/OurWorkPage';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
  return (
    <LangProvider>
      <Router>
        <div className="min-h-screen bg-white text-text-dark font-sans flex flex-col font-cairo">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/our-work" element={<OurWorkPage />} />
            </Routes>
          </div>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </LangProvider>
  );
}

export default App;
