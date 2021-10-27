import React, { useState } from "react";
import './NewForm.css';


const NewForm = (props) => {
  const [input, setInput] = useState({
    name: "",
    recipient: "",
    occasion: "",
    price: 0,
    link: "",
    img: "",
    isbought: false
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value, });
  };
  const handleCheckBox = (e) =>
    setInput({ ...input, isbought: !input.isbought });

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(input);
  };
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
      await fetch("http://localhost:9000/wishlist", configs);
      props.history.push('/wishlist');

    } catch (error) {
      console.log(error);
      props.history.push('/wishlist/new');
    }
  };

  return (
    <div>
      <h1>Create New Wishlist</h1>
    <div className='wrapper'>
      <div className='card red'>
        <form onSubmit={handleSubmit}>
          <p>
          <label htmlFor="name">Name:</label>
          <input name="name" id="name" value={input.name} onChange={handleChange} />
          </p>
          <p>
          <label htmlFor="recipient">Recipient</label>
          <input name="recipient" id="recipient" value={input.recipient} onChange={handleChange} />
          </p>
          <p>
          <label htmlFor="occasion">Occasion</label>
          <input name="occasion" id="occasion" value={input.occasion} onChange={handleChange} />
          </p>
          <p>
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" value={input.price} onChange={handleChange} />
          </p>
          <p>
          <label htmlFor="link">Link</label>
          <input type="text" name="link" id="link" value={input.link} onChange={handleChange} />
          </p>
          <p>
          <label htmlFor="img">Image</label>
          <input type="text" name="img" id="img" value={input.img} onChange={handleChange} />
          </p>
          <p>
          <label htmlFor="isbought">Isbought?</label>
          <input type="checkbox" name="isBought" onChange={handleCheckBox} />
          <input type="submit" value="Create a New Wishlist" />
          </p>
        </form>
      </div>
    </div>
    </div>
  )
};

export default NewForm;