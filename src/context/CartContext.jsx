import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(()=>{
    try {
      const saved = localStorage.getItem("cart")
      return saved ? JSON.parse(saved) : []
    } catch  {
      return []
    }
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])
  
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
  };

    const decreaseQuantity = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity - 1  }
            : i
        );
      }
      
    });
  };



  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };
  const clearCart = () => setCartItems([])
  return (
    <CartContext.Provider value={{cartItems,setCartItems,addToCart,removeFromCart,clearCart, decreaseQuantity}}> {children} </CartContext.Provider>
  );
};


export const useCart = () => {
  return useContext(CartContext);
};