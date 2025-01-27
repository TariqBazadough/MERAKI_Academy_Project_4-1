import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ItemCardContext } from "./../contexts/main";
import { HeaderContext } from "../contexts/header";
import "./main.css";

const SearchProduct = (props) => {
  const headerContext = useContext(HeaderContext);
  const itemCardContext = useContext(ItemCardContext);
  const history = useHistory();

  if (headerContext.filterPrice == "ascending") {
    const f = props.item.sort(function (a, b) {
      return a.price - b.price;
    });
  }
  if (headerContext.filterPrice == "descending") {
    props.item.sort(function (a, b) {
      return b.price - a.price;
    });
  }

  const cardDetails = async (id) => {
    const foundItem = props.item.find((elem) => {
      return elem._id == id;
    });
    itemCardContext.setFound(foundItem);
    history.push("/product/details");
  };
  return (
    <>
      <div className="mainBody">
        {props.item.map((elem) => {
          return (
            <div
              onClick={() => {
                cardDetails(elem._id);
              }}
              className="itemCard"
              key={elem._id}
            >
              <div>
                <img className="product-img" src={elem.image}></img>
              </div>
              <div>
                <p className="title">{elem.title}</p>
                <p className="info">{elem.shortDescription}</p>
                <p className="price">{elem.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div></div>
    </>
  );
};

export default SearchProduct;
