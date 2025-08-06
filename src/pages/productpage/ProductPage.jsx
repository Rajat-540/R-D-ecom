import { useState } from 'react';
import ProductList from "../../components/productList";
import CartIcon from '../../components/cartIcon/CartIcon';
function ProductPage(){
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
    // view cart items
    function getTotalItems(cart) {
      return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
    }
      const totalItems = getTotalItems(cart);
      return (
        <div className="App">
          <div>
            <CartIcon cartCount={totalItems} onClick={() => {
              const titles = Object.values(cart).map(item => item.title+" - "+item.quantity);
              alert(`Cart items: \n- ${titles.join('\n- ')}`);
            }}/>
          </div>
          <ProductList addToCart={addToCart} decreaseQty={decreaseQty} cart={cart}/>
        </div>
      );
}
export default ProductPage;