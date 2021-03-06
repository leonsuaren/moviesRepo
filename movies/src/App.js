import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './views/home/Home';
import { Footer } from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Favorites } from './views/Favorites/Favorites';
import { NowPlaying } from './views/NowPlaying/NowPlaying';
import { Popular } from './views/popular';
import { TopRated } from './views/TopRated/TopRated';
import { Login } from './views/login/Login';
import { PrivateRoute } from './routing/private/PrivateRoute';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="now-playing" element={<NowPlaying />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="now-playing" element={<NowPlaying />} />
            <Route path="popular" element={<Popular />} />
            <Route path="top-rated" element={<TopRated />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
