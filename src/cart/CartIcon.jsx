import { FaShoppingCart } from 'react-icons/fa'; // FontAwesome cart icon

function CartIcon ({ cartCount, onClick }){
  const badgeStyle = {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '12px',
    fontWeight: 'bold',
  };

  const containerStyle = {
    position: 'fixed',
    top: 10,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    zIndex: 1100
  };

  return (
    <button style={containerStyle} onClick={onClick} aria-label="View Cart">
      <FaShoppingCart />
      {cartCount > 0 && <span style={badgeStyle}>{cartCount}</span>}
    </button>
  );
};

export default CartIcon;
