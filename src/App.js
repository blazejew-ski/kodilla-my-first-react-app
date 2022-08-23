import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Favorite from './components/Favorite/Favorite.js';
import NotFound from './components/NotFound/NotFound.js';
import List from './components/List/List.js';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/list/:listId" element={<List />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;