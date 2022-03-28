import React from "react";
import Button from "@material-ui/core/Button";
import { useContext } from "react";
import CartContext from "../CartContext";

function MenuItem({ image, name, price }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }} className="img"></div>
      <h1> {name} </h1>
      <p> {price} €</p>
      <Button
        className="btn--menuItem"
        variant="contained"
        color="secondary"
        onClick={() => addToCart(name, price)}
      >
        Ajouter au panier
      </Button>
    </div>
  );
}

export default MenuItem;
