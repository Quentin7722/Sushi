import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false); // MUI alert

  const addToCart = (name, price) => {
    const objIndex = items.findIndex((obj) => obj.name === name);
    if (objIndex < 0) {
      setItems((prevState) => [...prevState, { name, price, number: 1 }]);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    } else {
      items[objIndex].number++;
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    }
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, open, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
