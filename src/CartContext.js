import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (name, price) => {
    const objIndex = items.findIndex((obj) => obj.name === name);
    console.log(objIndex);
    if (objIndex < 0) {
      setItems((prevState) => [...prevState, { name, price, number: 1 }]);
    } else {
      items[objIndex].number++;
    }
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
