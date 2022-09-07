import React from "react";
import Item from "../Item/Item";



const Itemlist = ({Prod}) =>{

return(
   Prod.map((Prod)=> <Item key={Prod.id} Prod={Prod}/>)
  )

}

export default Itemlist;