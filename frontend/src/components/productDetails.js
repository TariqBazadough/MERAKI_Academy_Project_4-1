import React, { useContext, useState } from "react";
import { LoginContext } from "./../contexts/login";
import { useHistory } from "react-router-dom";
import { CartContext } from "./../contexts/cart";
import { ItemCartContext } from "./../contexts/productDetails";
import "./product.css";
import addToCart from "./addCart.png";
import backIcon from "./back.png";
import exchangeIcon from "./exchange.png";

const ProductDetails = (props) => {
  const itemCartContext = useContext(ItemCartContext);
  const cartContext = useContext(CartContext);
  const loginContext = useContext(LoginContext);
  const [notLogged, setNotLogged] = useState(false);
  const [logged, setLogged] = useState(false);
  const [pId, setPId] = useState();
  let history = useHistory();

  const loginAuth = async () => {
    if (loginContext.token) {
      setNotLogged(false);
      setLogged(true);
      itemCartContext.setQuantity(props.item.quantity);
      cartContext.addToCart();
    } else {
      {
        setLogged(false);
        setNotLogged(true);
      }
    }
  };
  return (
    <>
      <div className="itemDetails">
        <div key={props.item._id}>
          <img className="product-img" src={props.item.image}></img>

          <p className="title">
            {props.item.title} ({props.item.shortDescription})
          </p>

          <p className="info">Tags : {props.item.tags}</p>
          <p className="info">Description :{props.item.description}</p>
          <p className="info">Located in: {props.item.location}</p>
          <p className="price">In Stock : {props.item.quantity}</p>
          <p className="price">price : {props.item.price}$</p>
        </div>
        <div className="add-button">
          <button onClick={loginAuth}>Add to cart</button>
          {props.item.optionsToExchange && <button>Exchange</button>}
          <button onClick={history.goBack}>Go Back</button>
        </div>
        <div>
          {notLogged ? <p className="failMessage">Login Is Required</p> : ""}
          {logged ? <p className="successMessage">Added to cart</p> : ""}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
