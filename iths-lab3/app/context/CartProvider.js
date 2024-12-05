"use client";

import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };
  const deleteFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id != id));
  }
  const totalCost = cartItems.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);

  const cartItemCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, deleteFromCart, totalCost, cartItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
