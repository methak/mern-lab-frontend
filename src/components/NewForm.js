import React, { useState, useEffect } from "react";


const NewForm = (props) => {
  const [input, setInput] = useState({
    name: "",
    recipeint: "",
    occation: "",
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
  props.addItem(input)
}

return (
  <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input name="name" id="name" value={input.name} onChange={handleChange} />
    <label htmlFor="recipeint">Recipeint</label>
    <input name="recipeint" id="recipeint" value={input.recipeint} onChange={handleChange} />
    <label htmlFor="occation">Occation</label>
    <input name="occation" id="occation" value={input.occation} onChange={handleChange} />
    <label htmlFor="price">Price</label>
    <input type="number" name="price" id="price" value={input.price} onChange={handleChange} />
    <label htmlFor="link">Link</label>
    <input type="text" name="link" id="link" value={input.link} onChange={handleChange} />
    <label htmlFor="img">Image</label>
    <input type="text" name="img" id="img" value={input.img} onChange={handleChange} />
    <label htmlFor="isbought">Isbought</label>
    <input type="checkbox" name="isBought" onChange={handleCheckBox}/>
    <input type="submit" value="Create a New Wishlist"/>
  </form>
)
};

export default NewForm;