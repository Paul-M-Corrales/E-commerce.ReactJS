import React from "react";
import { useContext } from 'react'
import { CartContext } from "../../Context/CartContext";
import '../ItemCart/ItemCart.css'

export const ItemCart = ({product}) => {
const {removeProduct} = useContext(CartContext)
return (
    <div className='col-md-12'>
        <div className="row d-flex align-items-center">
            <div className="col-md-2">
                <img src={product.img_titulo} alt={product.nombre} width='150' />
            </div>
            <div className="col-md-2 ">
                <p>{product.nombre}</p>
            </div>
            <div className="col-md-2">
                <p>Cantidad: {product.quantity}</p>
            </div>
            <div className="col-md-2">
                <p>Unitario: ${product.precio}</p>
            </div>
            <div className="col-md-2">
                <p>Total a pagar: ${product.precio * product.quantity}</p>
            </div>
            <div className="col-md-2">
                <button className='btn btn-warning text-white d-block mx-auto' onClick={() => removeProduct(product.id)} style={{boxShadow: "0px 3px 5px #7d7d7d"}}>Eliminar</button>
            </div>
        </div>
    </div>
)
}

export default ItemCart;

