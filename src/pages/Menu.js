import React, { useContext } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import Alert from "@mui/material/Alert";
import CartContext from "../CartContext";
import { Fade } from "@mui/material";

function Menu() {
  const { open } = useContext(CartContext);

  return (
    <div className="menu">
      <h1 className="menuTitle">
        Notre Carte<hr className="solid"></hr>
      </h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
      {open === true && (
        <Fade in={open}>
          <Alert variant="filled" severity="success" className="alert">
            Article ajoué au panier !
          </Alert>
        </Fade>
      )}
    </div>
  );
}

export default Menu;
