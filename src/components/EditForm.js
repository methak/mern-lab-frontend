import { useState, useEffect } from 'react'

function EditForm(props) {
    const initialState = {
        name: '',
        recipient: '',
        occation: '',
        price: 0,
        link: '',
        isbought: false
    }

    const [input, setInput] = useState(initialState)
    const [loading, setLoading] = useState(true)

    const getWishlistToEdit = async (id) => {
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
        props.history.push('/wishlist/' + id)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, recipient, occation, price, link, isbought } = input;
        const wishlistData = { name, recipient, occation, price, link, isbought }
        updateWishlist(input._id, wishlistData);
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleCheckBox = (e) =>{
        setInput({ ...input, isbought: !input.isbought })
    }

    useEffect(()=> {
        getWishlistToEdit()
    },[])

    return (
        <div>
            <h1>Edit Form</h1>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input name='name' id='name' value={input.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='recipeint'>Recipeint</label>
                    <input name='recipeint' id='recipeint' value={input.recipient} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='occation'>Occation</label>
                    <input name='occation' id='occation' value={input.occation} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='price'>Price</label>
                    <input type='number' name='price' id='price' value={input.price} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='link'>Link</label>
                    <input type='text' name='link' id='link' value={input.link} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='img'>Image</label>
                    <input type='text' name='img' id='img' value={input.img} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='isbought'>Isbought?</label>
                    <input type='checkbox' name='isbought' id='isbought' onChange={handleCheckBox} />
                    <input type='submit' value='Edit this Wishlist'/>
                </div>
            </form>
        </div>
    )
}

export default EditForm
