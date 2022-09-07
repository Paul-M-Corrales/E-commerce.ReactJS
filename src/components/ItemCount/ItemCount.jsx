import React,{useState} from "react";

const ItemCount = ({initial,stock,onAdd}) =>{
const [count, setcount]= useState(initial);
const decrementa = () =>{
    setcount(count - 1);
}
const incrementa = () =>{
    setcount(count + 1);
}

    return(
        <div className="counter">
            <button disabled={count<=initial} onClick={decrementa}>-</button>
            <span>{count}</span>
            <button disabled={count>=stock} onClick={incrementa}>+</button>
            <div>
                <button disabled={count<=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;