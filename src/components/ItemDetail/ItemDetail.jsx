import React from "react";
import '../ItemDetail/Itemdetail.css';
import Stock from "../Stock/Stock"


const ItemDetail = ({item}) => {
return(
<div className="container py-5">
    <div className="detail">
        {<img className="detail_image" src={item.img_detalle} width="500px" alt={item.nombre} /> }
        <div className=" description text-md-center">
        {<img className="detail_image mb-5" src={item.img_titulo} width="350px" alt={item.nombre} /> }
            <p>{item.detalle}</p>
            <div><Stock /></div>
        </div>
    </div>
</div>
);
}

export default ItemDetail;