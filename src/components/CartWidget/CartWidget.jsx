import React from "react";
import { useContext } from 'react'
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalProducts} = useContext(CartContext)
    return(
        <Link to="/cart" className="position-relative"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqB83JJJoGVKlV6FZ0EFSDk_XfzIOTMyVxLg&usqp=CAU" width="50px" alt="carrito" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
            {totalProducts() ? totalProducts() : ""}
        </span>
    </Link>
    )
}
export default CartWidget;


