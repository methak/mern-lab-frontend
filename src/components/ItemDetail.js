
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function ItemDetail(props) {
    const currentId = props.match.params.id
    const [wishlist, setWishlist] = useState({})

    const getWishlist = async(id) => {
        const foundWishlist = await fetch('https://shrouded-river-09782.herokuapp.com/wishlist/'+id)
        const parsedWishlist = await foundWishlist.json()
        console.log(parsedWishlist)
        setWishlist(parsedWishlist)
    };

    useEffect(()=> {
        getWishlist(currentId)
    },[currentId]);

    return (
        <>
            <h1>Detail Page</h1>
            <p>Id: {wishlist._id}</p>
            <p>Name: {wishlist.name}</p>
            <p>Recipient: {wishlist.recipient}</p>
            <p>Occasion: {wishlist.occasion}</p>
            <p>Price: {wishlist.price}</p>
            <p>Link: {wishlist.link}</p>
            <p>isBought: {wishlist.isBought ? "True" : "False"}</p>
            
            <Link to={"/wishlist"}>Go Back </Link>
            <Link to={`/wishlist/${wishlist._id}/edit`}>Edit this Item </Link>
        </>

    )
};

export default ItemDetail
