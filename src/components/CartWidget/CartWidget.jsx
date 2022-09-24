import React from "react";
import { useContext } from 'react'
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalProducts} = useContext(CartContext)
    return(
        <Link to="/cart" className="position-relative"><i className="fa-solid fa-cart-shopping text-dark h3"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
            {totalProducts() ? totalProducts() : ""}
        </span>
    </Link>
    )
}
export default CartWidget;


