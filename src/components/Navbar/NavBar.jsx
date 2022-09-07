import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Auto</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Moto</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Competicion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Bicicleta</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Camion-Bus</a>
                </li>
                <a className="navbar-brand" href="/"> <CartWidget/></a>
            </ul>
            
        <div>
            <nav className="nav">
                <a className="navbar-brand" href="/"> <img src="../img/logo.png" width="130" alt="" /></a>
                <a className="nav-link active" aria-current="page" href="/">Neumaticos</a>
                <a className="nav-link" href="/">Por qué P.M.C</a>
                <a className="nav-link" href="/">Encuentre su taller</a>
            </nav> 
        </div>

        
        

        </div>
        
    )
}

export default NavBar;