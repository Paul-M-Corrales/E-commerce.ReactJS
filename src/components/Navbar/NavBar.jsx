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
                <NavLink className="navbar-brand" to="inicio"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ42CfGxg85LVGVukgs6ACSIRT0zLAk6eERA&usqp=CAU" width="150" alt="" /></NavLink>
                <NavLink className="nav-link active" aria-current="page" to="/oferta">Neumaticos de alto rendimiento</NavLink>
                <NavLink className="nav-link" to="/PMC">Por qué P.M.C</NavLink>
                <NavLink className="nav-link" to="/taller">Contacto</NavLink>
            </nav> 
        </div>

        
        

        </div>
        
    )
}

export default NavBar;