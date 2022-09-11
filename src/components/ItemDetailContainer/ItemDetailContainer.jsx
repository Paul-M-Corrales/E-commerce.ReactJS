import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {Neumaticos} from "../../Mock"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [Productos, setProductos]= useState([])
    const {Id} = useParams();

    useEffect(() =>{
       const getData = new Promise((resolve =>{
         setTimeout(() => {
           resolve(Neumaticos)
         }, 500);
       }));
       if (Id) {
         getData.then(res=> setProductos(res.find(promesa=>promesa.id === parseInt(Id))));         
       }
     },[Id]) 
    return(
<ItemDetail item={Productos}/>

    );
    
}
export default ItemDetailContainer;