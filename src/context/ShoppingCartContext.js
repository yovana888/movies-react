import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const ShoppingCartContext = React.createContext();

export const ShoppingCartProvider = ({ children }) => {
  const {user} = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if(user.id){
      setItems(JSON.parse(localStorage.getItem("movieapp.shoppingcart"+user.id)) ?? [])
    }
  }, [user])
  

  // que debemos guardar
  //* obj pelicula
  //* cantidad (como minimo 1) imdbID

  function saveInCart(movie, user_id) {
    const index = items.findIndex((item) => item.movie.imdbID === movie.imdbID);
    if(index > -1) {
      const item = items[index];
      const total=parseInt(item.quantity) + 1;
      const object = {
       movie,
       user_id,
       quantity:total
      };
      console.log(object,'obj')
      items[index]=object;
    }else{
      const object = {
        movie,
        user_id,
        quantity: 1,
      };
      items[items.length] = object;
    }
    setItems([...items]);
    saveInLocalStorage(items);
  }

  function  removeInCart(idmovie){
    const index = items.findIndex((item) => item.movie.imdbID === idmovie);
    console.log(index,'id delete')
    if(index > -1) {
      items.splice(index, 1);
      setItems([...items]);
      saveInLocalStorage(items);
    }
  }


  function saveInLocalStorage(items) {
    localStorage.setItem("movieapp.shoppingcart"+user.id, JSON.stringify(items));
  }

  return (
    <ShoppingCartContext.Provider value={{ items, saveInCart,  removeInCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
