import { useState } from 'react';
import './App.css';
import ProductList from "./productList";


function App() {
  let [cart, setCart] = useState({});
  function addToCart(product){
    let newCart = {...cart};
    newCart[product.id] = {
      productId : product.id,
      title : product.title,
      description : product.description,
      price : product.price
    }
    setCart(newCart);
  }
  console.log("cart is",cart);
  return (
    <div className="App">
      <ProductList addToCart={addToCart}/>
    </div>
  );
}

export default App;
