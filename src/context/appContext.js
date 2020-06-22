import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

function AppContextProvider(props) {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((err) => console.log(err));
  }, []);

  const toggleFavorite = (id) => {
    const toggled = photos.map((pic) => {
      if (pic.id === id) {
        return {
          ...pic,
          isFavorite: !pic.isFavorite,
        };
      }
      return pic;
    });
    setPhotos(toggled);
  };

  const manageCart = (pic) => {
    if (cartItems.some((item) => item.id === pic.id)) {
      const removedItem = cartItems.filter((item) => item.id !== pic.id);
      setCartItems(removedItem);
    } else {
      setCartItems([...cartItems, pic]);
    }
  };

  return (
    <AppContext.Provider
      value={{ photos, toggleFavorite, cartItems, manageCart, setCartItems }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
