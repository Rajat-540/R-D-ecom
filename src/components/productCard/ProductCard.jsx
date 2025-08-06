import React from 'react';

// ProductCard component to display one product
const ProductCard = ({ product, addToCart, decreaseQty, cart }) => {
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
    const styles = {
        list: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
        },
        addToCart:{
            marginTop: '0.8rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#E53935',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            width: '100%',
            },
        card: {
            border: '1px solid #ddd',
            borderRadius: '8px',
            width: 280,
            padding: '1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            backgroundColor: '#fff',
        },
        image: {
            width: '100%',
            height: 160,
            borderRadius: '4px',
            objectFit: 'contain',
            marginBottom: '0.8rem',
        },
        title: {
            fontSize: '1.1rem',
            margin: '0 0 0.4rem 0',
            height: 48,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
        },
        brandModel: {
            color: '#555',
            fontSize: '0.85rem',
            margin: '0 0 0.2rem 0',
        },
        category: {
            fontSize: '0.8rem',
            color: '#888',
            margin: '0 0 0.6rem 0',
        },
        description: {
            fontSize: '0.85rem',
            color: '#444',
            margin: '0 0 0.8rem 0',
            height: 55,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
        },
        priceWrapper: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
        },
        originalPrice: {
            textDecoration: 'line-through',
            color: '#999',
            fontSize: '0.9rem',
        },
        price: {
            fontWeight: 'bold',
            color: '#E53935',
            fontSize: '1.1rem',
        },
        discount: {
            color: '#4CAF50',
            fontWeight: '600',
            fontSize: '0.9rem',
        },
    };
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
            <div class="quantity-control" style={{padding : '15px'}}>
                <button type="button" id="decrement" onClick={handleDecreaseQty}>-</button>
                <span id="quantity" style={{padding : '10px'}}>{cart[product.id].quantity}</span>
                <button type="button" id="increment" onClick={handleAddToCart}>+</button>
            </div>
            }
        </div>
    );
};



export default ProductCard;
