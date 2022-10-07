import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"
import '../Navbar/NavBar.css';

const NavBar = () => {
    return(
        <div className="container_navbar">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                  <Link  className="nav-link text-white" aria-current="page" to="/auto">Auto</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/moto">Moto</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/competicion">Competicion</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/bicicleta">Bicicleta</Link>
                </li>
                <Link className="navbar-brand" to="/cart"> <CartWidget/></Link>
            </ul>
            
        <div>
            <nav className="nav">
                <Link className="navbar-brand" to="/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-X9oM23h704vzvBbUgf9edYDEdD4gOigrjTvaHDMoupWMgW-VL042UelJM5p15euLdYQ&usqp=CAU" width="100" alt="" /></Link>
                <Link className="nav-link text-white" aria-current="page" to="/oferta">Neumaticos de alto rendimiento</Link>
                <Link className="nav-link text-white" to="/inicio">Eventos P.M.C</Link>
                <Link className="nav-link text-white" to="/contacto">Contacto</Link>
            </nav> 
        </div>

        
        

        </div>
        
    )
}

export default NavBar;