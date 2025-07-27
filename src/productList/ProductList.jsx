import { useEffect, useState } from "react"
import ProductCard from "../productCard";
import logo from '../logo.svg';

function ProductList(){
    const [products,setProducts] = useState([]);
    let [loading,setLoading] = useState(true);
    useEffect(() =>{
        fetch("https://fakestoreapi.in/api/products?page=1&limit=5")
        .then(res => res.json())
        .then(res => {setProducts(res["products"]);
             setLoading(false);})
        //console.log(products);
    },[]);
    
    const styles = {
        list: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            justifyItems: 'center',
        },
        loader:{
            minHeight: '100vh',         // Full viewport height
            display: 'flex',
            justifyContent: 'center',   // Center horizontally
            alignItems: 'center',       // Center vertically
            background: '#f5f5f5',
        }
    };
    if(loading)
      return(<div style={styles.loader}><img src={logo} className="App-logo" alt="logo" /></div>);
    return(
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div style={styles.list}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    );
}

export default ProductList;