import React from "react";
import '../ItemDetail/Itemdetail.css';


export const ItemDetail = ({data}) => {
return(
<div className="container">
    <div className="detail">
        <img className="detail_image" src={data.img} width="300px" alt="" />
        <div className=" description">
            <p className="marca"><b>{data.nombre}</b></p>
            <p>{data.descripcion}</p>
        </div>
    </div>
</div>
);
}

export default ItemDetail;