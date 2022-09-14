import React from "react";
import { useParams } from "react-router-dom";

export const ImagenPrincipal = () => { 
    const {categoriaId} = useParams(); 
    let img=""; 
    if (categoriaId === "auto") {
      img= <img className="imagen_pirelli my-3" src="https://d3nv2arudvw7ln.cloudfront.net/images/global/285/319/Dsk-1920x862-09-4505510967630.jpg" width="100%" alt=""></img>
    }else if (categoriaId === "moto"){
     img= <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src="https://d3nv2arudvw7ln.cloudfront.net/images/global/497/316/diablo-rosso-4-corsa-dsk-1920x862-4505527982718.jpg" class="d-block w-100" alt="" />
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src="https://d3nv2arudvw7ln.cloudfront.net/images/global/955/707/Dsk-1920x862-b-4505522095363.jpg" class="d-block w-100" alt="" />
    </div>
    <div class="carousel-item">
      <img src="https://d3nv2arudvw7ln.cloudfront.net/images/global/884/840/Slide-AngelGT-Dsk-4505480653220.jpg" class="d-block w-100" alt="" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    } else if (categoriaId === "competicion") {
      img= <img className="imagen_pirelli my-3" src="https://d3nv2arudvw7ln.cloudfront.net/images/global/676/263/hp-motorsport-visore-4505481793415.jpeg" alt="" />
    } else if (categoriaId === "bicicleta") {
      img= <img className="imagen_pirelli my-3" src="https://www.mtbpro.es/sites/default/files/fotosprincipales/pirelli_scorpion_mtb_1.jpg" alt="" />
    }else if (categoriaId === "oferta") {
        img= <img className="imagen_pirelli my-3" src="https://d3nv2arudvw7ln.cloudfront.net/images/global/900/131/hero-tyresgroup-4505508874689.png" alt="" />
      }else if (categoriaId === "inicio") {
        img= <img className="imagen_pirelli my-3" src="https://acnews.blob.core.windows.net/imgnews/medium/NAZ_75b2eb943e224d1998d3fee12dcd93d1.jpg" alt="" />
      }else if (categoriaId === "cart") {       
        img=<img className="imagen_pirelli my-3" src="https://d1ih8jugeo2m5m.cloudfront.net/2021/12/pagina-web-con-carrito-de-compras-2.jpg" width="800px" alt="" />
      }
    
return(
    <div>
       {img}
    </div>
)
}


export default ImagenPrincipal;