import ProductList from './component/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './component/ProductDetails';
// import ProductList from "./component/Product"
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<ProductList/>} />
      <Route path='product-details' element={<ProductDetails/>}>
        <Route path=':id' element={<ProductDetails/>} />
      </Route>
    </Routes>
     
    </Router>
  );
}

export default App;
