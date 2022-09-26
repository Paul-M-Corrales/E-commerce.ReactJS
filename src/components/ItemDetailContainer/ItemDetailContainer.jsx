import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc,  } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [Productos, setProductos]= useState({})
    const {Id} = useParams();

     useEffect(() => {
      const db = getFirestore()
      const response = doc(db, 'Neumaticos', Id);
      getDoc(response).then(snapShot => {
        setProductos({id: snapShot.id, ...snapShot.data()})
          
      })
  }, [Id])
    return(
<ItemDetail item={Productos}/>

    );
    
}
export default ItemDetailContainer;