import { useState, useEffect } from 'react'

function EditForm(props) {
    const initialState = {
        name: '',
        recipient: '',
        occasion: '',
        price: 0,
        link: '',
        isBought: false
    }
    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState(initialState)
    const [loading, setLoading] = useState(true)

    const getWishlistToEdit = async () => {
        try {
            const id = props.match.params.id;
            const foundWishlist = await fetch('http://localhost:9000/wishlist/' + id)
            const parsedWishlist = await foundWishlist.json()
            setInput(parsedWishlist)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const updateWishlist = async (id, data) => {
        const configs = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }

        const updateWishlist = await fetch('http://localhost:9000/wishlist/' + id, configs)
        const parsedUpdatedWishlist = await updateWishlist.json();
        console.log("after update:", parsedUpdatedWishlist.name);
        props.history.push('/wishlist/' + id)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, recipient, occasion, price, link, isBought } = input;
        const wishlistData = { name, recipient, occasion, price, link, isBought }
        updateWishlist(input._id, wishlistData);
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleCheckBox = (e) =>{
        setInput({ ...input, isBought: !input.isBought })
    }

    useEffect(()=> {
        getWishlistToEdit()
    },[])

    const toggleDeleteModal = (e) => {
        e.preventDefault();
        setShowModal(!showModal);
    };
    const deleteWishlist = async (id) => {
        try {
            const deletedWishlist = await fetch(
                `http://localhost:9000/wishlist/${id}`,
                {
                    method: "DELETE",
                }
            );
            console.log(deletedWishlist);    
            const parsedDeletedWishlist = await deletedWishlist.json();
            props.history.push("/wishlist");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>Edit Form</h1>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input name='name' id='name' value={input.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='recipient'>Recipient</label>
                    <input name='recipient' id='recipient' value={input.recipient} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='occasion'>Occation</label>
                    <input name='occasion' id='occasion' value={input.occasion} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='price'>Price</label>
                    <input type='number' name='price' id='price' value={input.price} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='link'>Link</label>
                    <input type='text' name='link' id='link' value={input.link} onChange={handleChange} />
                </div>
                {/* <div>
                    <label htmlFor='img'>Image</label>
                    <input type='text' name='img' id='img' value={input.img} onChange={handleChange} />
                </div> */}
                <div>
                    <label htmlFor='isBought'>isBought?</label>
                    <input type='checkbox' name='isBought' id='isBought' checked={input.isBought} onChange={handleCheckBox} />    
                </div>
                <br/>
                <div>
                    <button onClick={() => props.history.goBack()}>Go Back</button>
                    <input type='submit' value='Edit this Wishlist'/>
                    <button onClick={toggleDeleteModal}>Delete Item</button>
                </div>
            </form>
            )}    
            {showModal ? (
                <div>
                    <h1>Confirm Deletion</h1>
                    <h3>Are you sure you want to delete this celebration?</h3>
                    <div>
                        <button onClick={() => deleteWishlist(input._id)}>Confirm</button>
                        <button onClick={toggleDeleteModal}>Cancel</button>
                    </div>
                </div>
            ) : null}
        
        </div>
    )
}

export default EditForm
