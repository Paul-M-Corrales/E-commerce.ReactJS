import React from "react";
import '../ItemDetail/Itemdetail.css';
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../Context/CartContext";
import { useState, useContext } from "react";
import {Link} from "react-router-dom"




export const ItemDetail = ({item}) => {
const [gotocart, setGotocart] = useState(false);
const { addProduct } = useContext(CartContext) 

const onAdd = (quantity) => {
    setGotocart(true);
        addProduct(item, quantity) 
    }
    

    
return(
<div className="container py-5">
    <div className="row detail">
        {<img className="detail_image img-fluid" src={item.img_detalle} width="500px" alt={item.nombre} /> }
        <div className="col m-auto description text-md-center">
        {<img className="detail_image mb-5 img-fluid" src={item.img_titulo} width="350px" alt={item.nombre} /> }
            <p>{item.detalle}</p>
            {
                gotocart
                ?<Link to="/cart"> Finalizar compra</Link>
            :<ItemCount initial={0} stock={10} onAdd={onAdd} />
}
        </div>
    </div>
</div>
);
}

export default ItemDetail;