import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lequipe from './pages/Lequipe';
import Jeu from './pages/Jeu';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lequipe' element={<Lequipe />} />
          <Route path='/jeu' element={<Jeu />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
