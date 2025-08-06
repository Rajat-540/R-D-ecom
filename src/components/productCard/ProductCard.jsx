import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import styles from './styles';

// ProductCard component to display one product
const ProductCard = ({ product}) => {
    const {cart, addToCart, decreaseQty} = useContext(CartContext);
    const {
        title,
        image,
        price,
        description,
        brand,
        model,
        color,
        category,
        discount,
    } = product;
    
    function handleAddToCart(){
        addToCart(product);
    }
    function handleDecreaseQty(){
        decreaseQty(product);
    }


    // Calculate discounted price
    const discountedPrice = (price * (100 - discount)) / 100;

    return (
        <div style={styles.card}>
            <img src={image} alt={title} style={styles.image} />
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.brandModel}>
                {brand} &#8226; {model} &#8226; {color}
            </p>
            <p style={styles.category}>Category: {category}</p>
            <p style={styles.description}>
                {description.length > 120 ? description.substring(0, 100) + '...' : description}
            </p>
            <div style={styles.priceWrapper}>
                {discount > 0 && (
                    <span style={styles.originalPrice}>₹{price.toFixed(2)}</span>
                )}
                <span style={styles.price}>₹{discountedPrice.toFixed(2)}</span>
                {discount > 0 && (
                    <span style={styles.discount}>({discount}% off)</span>
                )}
            </div>{
                cart[product.id]==null ?
            <button style={styles.addToCart} onClick={handleAddToCart}>Add to Cart</button> :
            <div className="quantity-control" style={styles.quantityControl}>
                <button type="button" id="decrement" style={styles.qtyButton} onClick={handleDecreaseQty}>-</button>
                <span id="quantity" style={{padding : '10px'}}>{cart[product.id].quantity}</span>
                <button type="button" id="increment" style={styles.qtyButton} onClick={handleAddToCart}>+</button>
            </div>
            }
        </div>
    );
};



export default ProductCard;
