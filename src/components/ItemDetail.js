import './ItemDetail.css'
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function ItemDetail(props) {
    const currentId = props.match.params.id
    const [wishlist, setWishlist] = useState({})

    const getWishlist = async(id) => {
        const foundWishlist = await fetch('http://localhost:9000/wishlist/'+id)
        const parsedWishlist = await foundWishlist.json()
        console.log(parsedWishlist)
        setWishlist(parsedWishlist)
    };

    useEffect(()=> {
        getWishlist(currentId)
    },[currentId]);

    return (
        <>
        <div className="card">
            <h1 className='card__title'>Detail Page</h1>
            <p className='card__id'>Id: {wishlist._id}</p>
            <p className='card__name'>Name: {wishlist.name}</p>
            <p className='card__recipient'>Recipient: {wishlist.recipient}</p>
            <p className='card__occasion'>Occasion: {wishlist.occasion}</p>
            <p className='card__price'>Price: {wishlist.price}</p>
            <p className='card__link'>Link: {wishlist.link}</p>
            <p className='card__isbought'>isBought: {wishlist.isBought ? "True" : "False"}</p>
        </div>    
            <Link to={"/wishlist"}>Go Back </Link>
            <Link to={`/wishlist/${wishlist._id}/edit`}>Edit this Item </Link>
        </>

    )
};

export default ItemDetail
