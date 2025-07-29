import { useState } from 'react';
import './App.css';
import ProductList from "./productList";

function App() {
  let [cart, setCart] = useState({});
  function addToCart(product){
    let newCart = {...cart};
    if(newCart[product.id] == null){
      newCart[product.id] = {
        productId : product.id,
        title : product.title,
        price : product.price,
        quantity:1
      }
    }
    else{
      newCart[product.id].quantity += 1; 
    }
    setCart(newCart);
  }
  //decrease Quantity functionality
  function decreaseQty(product){
    let newCart = {...cart};
    if(newCart[product.id].quantity === 1){
      delete(newCart[product.id]);
    }
    else{
      newCart[product.id].quantity -= 1; 
    }
    setCart(newCart);
  }

  console.log("cart is",cart);
  return (
    <div className="App">
      <ProductList addToCart={addToCart} decreaseQty={decreaseQty} cart={cart}/>
    </div>
  );
}

export default App;
