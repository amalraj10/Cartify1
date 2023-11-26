
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import './bootstrap.min.css'
import Footer from './components/Footer';
import BuyorSell from './pages/BuyorSell';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Cart from './pages/Cart';
function App() {
  return (
    <div>
  <Routes>
<Route path='/' element={<LandingPage/>}/>
<Route path='/buyorsell' element={<BuyorSell/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/favourite' element={<Favourites/>}/>
<Route path='/cart' element={<Cart/>}/>
  </Routes>

  <Footer/>
    </div>
  );
}

export default App;
