import React from "react";
import Item from "../Item/Item";



const Itemlist = ({Prod}) =>{

return(
/*    Prod.map((Prod)=> <Item key={Prod.id} Prod={Prod}/>) */
   <div className="row text-center min-vh-100">
            {Prod.map(Prod => (
                <div key={Prod.id} className="col-md-3 text-center">
                    <Item Prod={Prod} />
                </div>
            ))}
        </div>
  )

}


export default Itemlist;