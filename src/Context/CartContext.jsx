import React, { useState} from "react";
export const CartContext = React.createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart ] = useState([]);
  const clearCart = () => setCart([]);
  const isInCart =(id) => {
   console.log(id);
    return cart.some((product) => product.id === id)};
  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const addProduct = (item, quantity) => {
    const prodSeleccionado = { ...item, quantity };
  

    if (isInCart(prodSeleccionado.id)) {
      setCart(
        cart.map((prod) => {
          return prod.id === item.id
            ? { ...prod, cantidad: prod.quantity + quantity }
            : prod;
        })
      );
    } else {
      setCart([...cart, prodSeleccionado]);
    }
    console.log(cart); 
  };

const totalProducts = () => cart.reduce((acumulador, prod) => acumulador + prod.quantity, 0)

const totalPrice = () => cart.reduce((total, item) => total+= item.precio * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider; 

