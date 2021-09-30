import React, { useState, useEffect } from "react";
import App from "../App";

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
    setInput({ ...input,{
      [e.target.name]: e.target.value,
      [e.target.recipeint]: e.target.value,
      [e.target.occation]: e.target.value,
      [e.target.price]: e.target.value,
      [e.target.link]: e.target.value,
      [e.target.img]: e.target.value,
      [e.target.isbought]: e.target.value
    }})

  const handleSubmit = (e) => {
    e.preventDefault()
    // props.(name in App.js create router)(input)
  }
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
    <input type="number" id="price" value={input.price} onChange={handleChange} />
    <label htmlFor="link">Link</label>
    <input type="url" id="link" value={input.link} onChange={handleChange} />
    <label htmlFor="img">Img</label>
    <input type="image" id="img" value={input.img} onChange={handleChange} />
    <label htmlFor="isbought">Isbought</label>
    <input type="checkbox"/>
    <input type="submit" value="Create a New Wishlist"/>
  </form>
)
};

export default NewForm;