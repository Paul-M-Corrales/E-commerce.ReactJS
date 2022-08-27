import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <div>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Auto</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Moto</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Competicion</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Bicicleta</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Camion-Bus</a>
                </li>
                <a class="navbar-brand" href=""> <CartWidget /></a>
            </ul>
            
        <div>
            <nav class="nav">
                <a class="navbar-brand" href=""> <img src="../img/logo.png" width="130" alt="" /></a>
                <a class="nav-link active" aria-current="page" href="#">Neumaticos</a>
                <a class="nav-link" href="#">Por qué P.M.C</a>
                <a class="nav-link" href="#">Encuentre su taller</a>
            </nav> 
        </div>

        
        

        </div>
        
    )
}

export default NavBar;