import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function ItemDetail(props) {
    const [wishlist, setWishlist] = useState({})

    const getWishlist = async () => {
        console.log(props.match.params.id);
        try {
            const id = props.match.params.id
            const foundItem = await fetch("http://localhost:9000/wishlist/" + id);
            if (foundItem.status === 200) {
                const parsedItem = await foundItem.json();
                console.log(parsedItem);
                setWishlist(parsedItem)
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => getWishlist(), []);

    return (
        <div>
            <p>{wishlist._id}</p>
            <p>{wishlist.name}</p>
            <p>{wishlist.recipient}</p>
            <p>{wishlist.occation}</p>
            <p>{wishlist.price} </p>
            
        </div>
    )
}

export default ItemDetail
