import React from "react";
import { Link } from "react-router-dom";


const Item = ({Prod}) => {
    return(
      
  <div className="container">
       <div className="card">
          <div className="card-body">
            <h2>{Prod.nombre}</h2>
            <img src={Prod.img}width="300px" alt={Prod.nombre} />
          <p className="card-text"><b>Marca: </b>{Prod.marca}</p>
          <p><b>Precio por unidad:</b> ${Prod.precio}</p>
         <Link to={`/item/${Prod.id}`} className="btn btn-primary">Detalle</Link>
       </div>
  </div>
  </div>
    )
}
export default Item;