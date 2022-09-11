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
            <button disabled={count<=initial} onClick={decrementa} type="button" className="btn btn-primary">-</button>
            <span className="px-3">{count}</span>
            <button disabled={count>=stock} onClick={incrementa} type="button" className="btn btn-primary">+</button>
            <div>
            
    
                <button className="btn btn-primary mt-1" disabled={count<=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;