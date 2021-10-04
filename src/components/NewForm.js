import React, { useState } from "react";
import { Link } from 'react-router-dom'


const NewForm = (props) => {
  const [input, setInput] = useState({
    name: "",
    recipient: "",
    occasion: "",
    price: 0,
    link: "",
    img: "",
    isbought: false
  })

const handleChange = (e) => {
    setInput({ ...input,[e.target.name]: e.target.value,})  
  }
const handleCheckBox = (e) =>
  setInput({ ...input, isbought: !input.isbought });

const handleSubmit = (e) => {
  e.preventDefault()
  addItem(input)
}
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
    await fetch("https://shrouded-river-09782.herokuapp.com/wishlist", configs)
    props.history.push('/wishlist')
  
  } catch (error) {
    console.log(error)
    props.history.push('/wishlist/new')
  }
}

return (
  <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input name="name" id="name" value={input.name} onChange={handleChange} />
    <label htmlFor="recipient">Recipient</label>
    <input name="recipient" id="recipient" value={input.recipient} onChange={handleChange} />
    <label htmlFor="occasion">Occasion</label>
    <input name="occasion" id="occasion" value={input.occasion} onChange={handleChange} />
    <label htmlFor="price">Price</label>
    <input type="number" name="price" id="price" value={input.price} onChange={handleChange} />
    <label htmlFor="link">Link</label>
    <input type="text" name="link" id="link" value={input.link} onChange={handleChange} />
    <label htmlFor="img">Image</label>
    <input type="text" name="img" id="img" value={input.img} onChange={handleChange} />
    <label htmlFor="isbought">Isbought?</label>
    <input type="checkbox" name="isBought" onChange={handleCheckBox}/>
    <input type="submit" value="Create a New Wishlist"/>
  </form>
)
};

export default NewForm;