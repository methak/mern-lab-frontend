import {useState, useEffect} from 'react';


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
            <h1>Detail Page</h1>
            <p>{wishlist._id}</p>
            {/* will add code after test */}
        </>
    )
};

export default ItemDetail
