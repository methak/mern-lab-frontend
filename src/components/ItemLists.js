import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function ItemLists(props) {
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
        <>
        <div>
            
          {wishlist && wishlist.map(item => (
            <div className ="itemCard" key={item._id} >
            <h4>{item.name} {item.recipient} </h4>
            <h4>{item.occation} {item.price} {item.isbought  ? "True" : "False"}</h4>
            </div>
          ))}
       
        </div>
        <div>
            <Link to="/wishlist/new">Create New Holiday</Link>
        </div>
        </>
    )
}

export default ItemLists
