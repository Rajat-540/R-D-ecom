import { useEffect, useState, memo } from "react"
import ProductCard from "../productCard";
import logo from '../../logo.svg';

function ProductList( { addToCart, decreaseQty, cart } ){
    const [products,setProducts] = useState([]);
    let [loading,setLoading] = useState(true);
    let [page, setPage] = useState(1);
    useEffect(() =>{
        setLoading(true);
        fetch(`https://fakestoreapi.in/api/products?page=${page}&limit=15`)
        .then(res => res.json())
        .then(res => {setProducts(res["products"]);
             setLoading(false);})
    },[page]);
    //let cartQuantity = 2;
    
    const styles = {
        list: {
            paddingTop:'5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1rem',
            justifyItems: 'center',
        },
        loader:{
            minHeight: '100vh',         // Full viewport height
            display: 'flex',
            justifyContent: 'center',   // Center horizontally
            alignItems: 'center',       // Center vertically
            background: '#f5f5f5',
        },
        topbanner:{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '70px',
          backgroundColor: '#a2c06eff',
          zIndex: 1000
        },
        bottombanner:{
          position: 'fixed',
          bottom: 0,                      // fixed at the bottom
          left: '50%',                   // horizontally center using left 50%
          transform: 'translateX(-50%)',  // offset to center exactly
          backgroundColor: '#e6e994ff',       // white background to overlay nicely
          borderTop: '1px solid #eee',
          padding: '10px 20px',
          zIndex: 1000,                  // make sure it appears above other content
          display: 'flex',
          gap: '10px',                   // space between buttons
          boxShadow: '0 -2px 8px rgba(0,0,0,0.1)'
        }
    };
    if(loading)
      return(<div style={styles.loader}><img src={logo} className="App-logo" alt="logo" /></div>);
    return(
    <div className="p-8">
      <div style={styles.topbanner}><h1 className="text-2xl font-bold mb-6">Products</h1></div>
      <div style={styles.list}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} 
          addToCart={addToCart} 
          decreaseQty={decreaseQty} 
          cart = {cart}/>
        ))}
      </div>
      <div style = {styles.bottombanner}>
        <button
            onClick={() => setPage(p => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span> Page {page} </span>
          <button  onClick={() => setPage(p => p + 1)}>
            Next
          </button>
        </div>
    </div>
    );
}

export default memo(ProductList);