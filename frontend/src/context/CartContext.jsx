import { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    //local storage
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  console.log("CART STATE:", cart);
  //add to cart
  const addToCart = (product) => {
     console.log("ADDING:", product); 
    const existing = cart.find(item => item.id === product._id);

    if (existing) {
      setCart(cart.map(item =>
        item.id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([
        ...cart,
        {
          id: product._id,
          name: product.name,
          price: product.price,
image: product.images?.main || product.images?.gallery?.[0],
quantity: 1 
  
      }
      ]);
    }
  };

  const increaseQty = (id) => {
  setCart(cart.map(item =>
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  ));
};

const decreaseQty = (id) => {
  setCart(cart.map(item =>
    item.id === id && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  ));
};

const removeFromCart = (id) => {
  setCart(cart.filter(item => item.id !== id));
};

const clearCart = () => {
  setCart([]);
};


  return (
<CartContext.Provider value={{ cart, addToCart, increaseQty, decreaseQty, removeFromCart , clearCart}}>      {children}
    </CartContext.Provider>
  );
};