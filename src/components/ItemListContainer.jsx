import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { promesa } from "../Mock";
import Itemlist from "./Itemlist"
import NavBar from "./NavBar";


const ItemListContainer = () => {
 const [Productos, setProductos]= useState([])
 const [loading, setloading]= useState(true)

 useEffect(() =>{
    promesa
    .then((respuesta)=> setProductos(respuesta))
    .catch(err => console.log(err))
    .finally(()=> setloading(false))
 },[])

 return(
    <div> 
        {   
        loading
    ?
    <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    :
    <div>
        <NavBar />
        <h1 className="pirelli my-3">NEUMATICOS PIRELLI <img src="https://d3nv2arudvw7ln.cloudfront.net/staticfolder/Tyre/resources/img/pirelli-logo.png" width="200px"alt=""/></h1>
        <div className="background">
          <img className="imagen_pirelli my-3" src="https://d3nv2arudvw7ln.cloudfront.net/images/global/285/319/Dsk-1920x862-09-4505510967630.jpg" width="100%" alt=""></img>
        </div>  
        <div className="lista">
            <Itemlist Prod = {Productos}/>
        </div>
    </div>
}
</div>
 )
 
}

export default ItemListContainer;