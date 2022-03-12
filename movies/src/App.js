import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { BrowserRouter as Router,Routes , Route } from 'react-router-dom';

import { TemporaryHome } from './views/TemporaryHome';

function App() {
  return (
    <div>
    <Router>
     <Navbar />
     <Footer />
     </Router>
    </div>
  );
}

export default App;
