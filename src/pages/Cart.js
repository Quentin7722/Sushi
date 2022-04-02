import "../styles/Cart.css";
import React, { useContext } from "react";
import CartContext from "../CartContext";
import Button from "@mui/material/Button";

function Cart() {
  const { items } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);
  const total = items.reduce((accumulator, object) => {
    return accumulator + object.price * object.number;
  }, 0);

  return (
    <div className="cart">
      {items.length > 0 ? (
        <div className="itemsCart">
          <h1 className="underline">Votre Panier :</h1>
          <ul>
            {items.map((item) => (
              <li>
                <h2>
                  {item.name} x{item.number}
                </h2>
                <h3>{item.price * item.number} €</h3>
              </li>
            ))}
          </ul>
          <span className="total">Total : {total.toFixed(2)} €</span>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              clearCart();
              alert("Votre commande a bien été enregistrée !");
            }}
          >
            Commander
          </Button>
        </div>
      ) : (
        <>
          <h1 className="emptyCartTitle">Votre panier est vide.</h1>
        </>
      )}
    </div>
  );
}

export default Cart;
