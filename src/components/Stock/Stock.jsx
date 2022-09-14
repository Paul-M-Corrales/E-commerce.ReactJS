import React,{useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";

const Stock = ({greeting}) => {
    const [goCarrito, setgoCarrito] = useState(false)
    const onAdd = () =>{
        setgoCarrito(true);
    }
    return (
        <div>
            <h1 className="greeting">{greeting}</h1>
            {
               goCarrito
               ?<Link to="/cart">Click para terminar compra</Link> 
               :<ItemCount initial={0} stock={10} onAdd={onAdd} /> 
            }
           
        </div>
    )
}

export default Stock;