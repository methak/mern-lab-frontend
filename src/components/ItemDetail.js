import './ItemDetail.css'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function ItemDetail(props) {
    const currentId = props.match.params.id
    const [wishlist, setWishlist] = useState({})

    const getWishlist = async (id) => {
        const foundWishlist = await fetch('http://localhost:9000/wishlist/' + id)
        const parsedWishlist = await foundWishlist.json()
        console.log(parsedWishlist)
        setWishlist(parsedWishlist)
    };

    useEffect(() => {
        getWishlist(currentId)
    }, [currentId]);

    return (
        <div>
            <h1>Details</h1>
            <div className='wrapper'>
                <div className="card red">
                    <p><span className='span'>Name:</span> {wishlist.name}</p>
                    <p><span className='span'>Recipient:</span> {wishlist.recipient}</p>
                    <p><span className='span'>Occasion:</span> {wishlist.occasion}</p>
                    <p><span className='span'>Price: </span> ${wishlist.price}</p>
                    <p><span className='span'>Link:</span> {wishlist.link}</p>
                    <p><span className='span'>isBought:</span> {wishlist.isBought ? "True" : "False"}</p>
                    <div>
                        <button className="btn"><Link to={"/wishlist"}>Go Back </Link></button>
                        <button className="btn"><Link to={`/wishlist/${wishlist._id}/edit`}>Edit this Item </Link></button>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default ItemDetail
