import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [wishlist, setWishlist] = useState([])

  const getWishlist = async () => {
    try {
      const wishlist = await fetch("http://localhost:9000/wishlist");
      const parsedWishlist = await wishlist.json();
      setWishlist(parsedWishlist);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getWishlist();
  }, []);
  return (
    <div className="App">
        <h1>Wishlist App</h1>
    </div>
  );
}

export default App;
