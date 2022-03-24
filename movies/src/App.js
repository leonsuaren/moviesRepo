import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/home/Home';
import { Footer } from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Favorites } from './views/Favorites/Favorites';
import { NowPlaying } from '../src/components/nowplaying/NowPlaying';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="favorites" element={<Favorites />}/>
          <Route path="now-playing" element={<NowPlaying />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
