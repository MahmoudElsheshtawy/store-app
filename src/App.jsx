import { BrowserRouter as Router ,Route ,Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return <>
<div className='overflow-hidden'>
  
 <Router>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/product/:id' element={<ProductDetails />} />
  </Routes>


 </Router>





</div>
  </>
}

export default App;
