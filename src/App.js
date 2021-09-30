import { useState, useEffect } from 'react'
import './App.css';
import NewForm from './components/NewForm';

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
  // Fetch (POST - CREATE)
  const addItem = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }
      const createdItem = await fetch("http://localhost:9000/wishlist", configs)
      const parsedItem = await createdItem.json()
      console.log(parsedItem)
      setWishlist([...wishlist, parsedItem])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getWishlist();
  }, []);
  return (
    <div className="App">
        <h1>Wishlist App</h1>
        <NewForm addItem={addItem} />
        <div className ="itemCard">
          {wishlist && wishlist.map(item => (
            <>
            <h4>{item.name} {item.recipient} </h4>
            <h4>{item.occation} {item.price} {item.isbought  ? "True" : "False"}</h4>
            </>
          ))}


        </div>
    </div>
  );
}

export default App;
