import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {NavLink} from "react-router-dom"

const NavBar = () => {
    return(
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                  <NavLink  className="nav-link active" aria-current="page" to="/auto">Auto</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/moto">Moto</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/competicion">Competicion</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/bicicleta">Bicicleta</NavLink>
                </li>
                <NavLink className="navbar-brand" to="/cart"> <CartWidget/></NavLink>
            </ul>
            
        <div>
            <nav className="nav">
                <NavLink className="navbar-brand" to="inicio"> <img src="../img/logo.png" width="130" alt="" /></NavLink>
                <NavLink className="nav-link active" aria-current="page" to="/oferta">Neumaticos de alto rendimiento</NavLink>
                <NavLink className="nav-link" to="/PMC">Por qué P.M.C</NavLink>
                <NavLink className="nav-link" to="/taller">Contacto</NavLink>
            </nav> 
        </div>

        
        

        </div>
        
    )
}

export default NavBar;