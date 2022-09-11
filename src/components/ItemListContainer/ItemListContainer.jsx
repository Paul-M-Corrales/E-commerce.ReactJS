import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Neumaticos } from "../../Mock";
import Itemlist from "../Itemlist/Itemlist";


const ItemListContainer = () => {
 const [Productos, setProductos]= useState([])
 const {categoriaId} = useParams();

 useEffect(() =>{
    const getData = new Promise((resolve =>{
      setTimeout(() => {
        resolve(Neumaticos)
      }, 500);
    }));
    if (categoriaId) {
      getData.then(res=> setProductos(res.filter(promesa=>promesa.categoria === categoriaId)));
    }else{
      getData.then(res=>setProductos(res));
    }
  },[categoriaId])
  
 return(
    <div> 
        <h1 className="pirelli my-3">NEUMATICOS PIRELLI <img src="https://d3nv2arudvw7ln.cloudfront.net/staticfolder/Tyre/resources/img/pirelli-logo.png" width="200px"alt=""/></h1>
        <div className="background">
            <img className="imagen_pirelli my-3" src="https://d3nv2arudvw7ln.cloudfront.net/images/global/285/319/Dsk-1920x862-09-4505510967630.jpg" width="100%" alt=""></img>
        
          
        </div>  
        <div className="lista">
            <Itemlist Prod = {Productos}/>
        </div>
    </div>
 )
 }

export default ItemListContainer;