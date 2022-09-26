import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ImagenPrincipal from "../ImagenPrincipal/ImagenPrincipal";
import Itemlist from "../Itemlist/Itemlist";
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore'


const ItemListContainer = () => {
 const [Productos, setProductos]= useState([])
 const {categoriaId} = useParams();

 useEffect(() => {
  const db = getFirestore();
  const itemsCollection = collection(db, 'Neumaticos')
  const queryItems = categoriaId ? query(itemsCollection, where('categoria', '==', categoriaId )) : itemsCollection;
  getDocs(queryItems).then(snapShot => {
    setProductos(snapShot.docs.map(item =>  ({id:item.id, ...item.data()}) ))
  })
}, [categoriaId])
  
 return(
    <div> 
        <h1 className="pirelli my-3">NEUMATICOS PIRELLI <img src="https://d3nv2arudvw7ln.cloudfront.net/staticfolder/Tyre/resources/img/pirelli-logo.png" width="200px"alt=""/></h1>
        <div className="background">
            <ImagenPrincipal />
                 
        </div>  
        <div className="lista">
            <Itemlist Prod = {Productos}/>
        </div>
    </div>
 )
 }

export default ItemListContainer;