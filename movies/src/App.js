import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/home/Home';
import { Footer } from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Favorites } from './views/Favorites/Favorites';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="favorites" element={<Favorites />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
