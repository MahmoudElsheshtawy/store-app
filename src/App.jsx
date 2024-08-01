import { BrowserRouter as Router ,Route ,Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App = () => {
  return <>
<div className='overflow-hidden '>
  
 <Router>
  <Header/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/product/:id' element={<ProductDetails />} />
  </Routes>
     <Sidebar/>
     <Footer/>
   </Router>





</div>
  </>
}

export default App;
