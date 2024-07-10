import { BrowserRouter as Router ,Route ,Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return <>
<div className='overflow-hidden'>
  <Home/>
  <ProductDetails/>
 





</div>
  </>
}

export default App;
