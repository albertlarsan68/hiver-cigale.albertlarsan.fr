import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Jeu from './pages/Jeu';
import Media from './pages/Media';
import Lequipe from './pages/Lequipe';
import NotFound from './pages/NotFound.js';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/jeu' element={<Jeu />} />
          <Route path='/media' element={<Media />} />
          <Route path='/lequipe' element={<Lequipe />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
