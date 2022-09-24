/* import React from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";


const Cart = () => {
const {cart, totalPrice, clearCart} = CartContext();

if (totalPrice() < 1) {

    return (
        <div className='text-center mt-5'>
            <h2>No hay productos en el Carrito!</h2>
            <Link to='/'><h3>Volver al Inicio</h3></Link>
        </div>
    )

}
return (
    <div className='container mt-5 text-center'>
        <div className="row">
            {cart.map((product) => (
                <ItemCart key={product.id} product={product} />
            ))}
            <hr className='mt-3' />
            <div className="row mt-3">
                <div className="col-md-4">
                    <button className='btn btn-warning text-white d-block mx-auto' onClick={() => clearCart()} style={{ boxShadow: "0px 3px 5px #7d7d7d" }}>Vaciar</button>
                </div>
                <div className="col-md-4 h2">
                    <p>Total: <b>${totalPrice()}</b></p>
                </div>
                <div className="col-md-4">
                    <button className='btn btn-warning text-white d-block mx-auto' style={{ boxShadow: "0px 3px 5px #7d7d7d" }}>Comprar</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default Cart; */

import React from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import { useContext } from 'react'

export const Cart = () => {

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    if (totalPrice() < 1) {

        return (
            <div className='text-center mt-5'>
                <h2>No hay productos en el Carrito!</h2>
                <Link to='/'><h3>Volver al Inicio</h3></Link>
            </div>
        )
    }

    return (
        <div className='container mt-5 text-center'>
            <div className="row">
                {cart.map((product) => (
                    <ItemCart key={product.id} product={product} />
                ))}
                <hr className='mt-3' />
                <div className="row mt-3">
                    <div className="col-md-4">
                        <button className='btn btn-warning text-white d-block mx-auto' onClick={() => clearCart()} style={{ boxShadow: "0px 3px 5px #7d7d7d" }}>Vaciar carrito</button>
                    </div>
                    <div className="col-md-4">
                        <button className='btn btn-warning text-white d-block mx-auto' style={{ boxShadow: "0px 3px 5px #7d7d7d" }}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;