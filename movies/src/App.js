import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/home/Home';
import { Footer } from './components/footer/Footer';
import {Actors} from './components/actors/Actors';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Actors />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
