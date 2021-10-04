import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../../src/App.css';

function ItemLists(props) {
    const [wishlist, setWishlist] = useState([])

  const getWishlist = async () => {
    try {
      const wishlist = await fetch("https://shrouded-river-09782.herokuapp.com/wishlist");
      const parsedWishlist = await wishlist.json();
      setWishlist(parsedWishlist);
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = (id) => {
    props.history.push('/wishlist/' + id)
  }

  useEffect(() => {
    getWishlist();
  }, []);
    return (
        <>
        <div className="wrapper">
            
          {wishlist && wishlist.map(item => (
            <div className ="card red" key={item._id} onClick={() => {handleClick(item._id);
            }} >
            <h2>{item.name}</h2> 
            <p> {item.recipient} </p>
            <p>{item.occasion} {item.price} {item.isBought  ? "True" : "False"}</p>
            <Link to={`/wishlist/${item._id}`}> &#62;&#62; </Link>
            </div>
          ))}
        <div className='add-button'>+</div>
        </div>
        
        </>
    )
}

export default ItemLists
