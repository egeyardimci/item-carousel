import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import { useEffect, useState } from 'react';
import { fetchProducts } from './api';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      const res = await fetchProducts();
      setProducts(res);
    };
    callAPI();
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <Carousel products={products} />
      </div>
    </>
  )
}

export default App
