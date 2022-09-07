import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const Objeto = {id: 1, nombre:"Cinturato P1 Plus", marca: "Pirelli", precio: "52000", img:"https://d3nv2arudvw7ln.cloudfront.net/images/global/1004/242/cinturato-p1-plus-3-4-4505480339981.jpg", descripcion: "El Cinturato P1 Plus es el neumático ideal para reemplazar el neumático de tu vehículo sin perder las prestaciones. Mantiene las cualidades de seguridad, durabilidad y tecnologías de Pirelli. El neumático posee alta prestación de frenado en pisos mojados y es la mejor opción para quien quiere resistencia al rodamiento sin renunciar al manejo deportivo"};

export const ItemDetailContainer = () => {
    const [data, setdata] = useState({});

    useEffect( () =>{
        const getdata = new Promise (resolve => {
            setTimeout(() => {
                resolve(Objeto)
            }, 2000);
        });

        getdata.then(res => setdata(res));
    },[])

    return(
<ItemDetail data={data}/>

    );
}
export default ItemDetailContainer;