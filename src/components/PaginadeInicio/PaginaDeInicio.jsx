import React from "react";
import ReactPlayer from "react-player";
import '../PaginadeInicio/PaginaDeInicio.css';

export const PaginaDeInicio = () => {
    return(
        <div className="py-5">
<div>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="fisi">
      <h1>FISI</h1>
      <p>Oficial Sponsor and Oficial Tyre Supplier</p>
      <p>4 años (2018-2022)</p>
      </div>
      <img src="https://d3nv2arudvw7ln.cloudfront.net/images/global/722/148/Sito-Old-DX-4505480363898.jpg" className="d-block w-100" alt="/"/>
    </div>
    <div className="carousel-item">
    <div className="fisi">
      <h1>CAMPEONATO FORMULA 1</h1>
      <p>Rendimiento seguridad y control. Pasion creatividad y experiencia</p>
      <p>la formula ganadora</p>
      </div>
      <img src="https://d3nv2arudvw7ln.cloudfront.net/images/global/441/606/WhyPirelliSlide1-4505480359838.jpeg" className="d-block w-100" alt="/"/>
    </div>
    <div className="carousel-item">
    <div className="fisi">
      <h1>GLOBAL TYRE PARTNER</h1>
      <p>27 años de alianza exitosa.una colaboracion duradera, posible gracias a valores en comun</p>
      <p>pasion, rendimiento, trabajo en equipo y un enfoque internacional</p>
      </div>
      <img src="https://d3nv2arudvw7ln.cloudfront.net/images/global/847/100/WhyINTER-4505480360756.png" className="d-block w-100" alt="/"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
<br />
<div>
  <div className="player-wrapper py-5">
<ReactPlayer 
url={"https://www.youtube.com/watch?v=JCNODqjFzeA"}
className="react-player"
width="100%"
/>
</div>
<br/>
<div className="container m-5 d-sm-inline-flex py-5">
<div className="card" width="18rem">
  <img src="https://d3nv2arudvw7ln.cloudfront.net/images/global/453/571/mark1-4505480331971.png" width="100px" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">CO-DISEÑO
DE 2 A 3 MESES</h5>
    <p className="card-text">Una cooperación sinérgica con los principales fabricantes de automóviles para adaptarse a la personalidad dinámica de cada modelo de auto. Para proporcionar lo mejor en términos de comodidad y manejo o simplemente en términos de equilibrio general y rendimiento.</p>
  </div>  
</div>
<div className="card" width="18rem">
  <img src="https://d3nv2arudvw7ln.cloudfront.net/images/global/262/970/mark2-4505480332145.png" width="100px" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">DESARROLLO DE PROTOTIPOS
DE 2 A 3 AÑOS</h5>
    <p className="card-text">La creación de un neumático base con una interacción perfecta entre las actividades de diseño avanzado y capacidades únicas de artesanía. Desarrollo a través de varias pruebas: manejo en condiciones secas y húmedas, comportamiento de aquaplaning, rendimiento invernal, resistencia al rodado, integridad y alta velocidad</p>
  </div>  
</div>
<div className="card" width="18rem">
  <img src="https://d3nv2arudvw7ln.cloudfront.net/images/global/71/345/mark3-4505480332240.png" width="100px" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">INDUSTRIALIZACIÓN DEL NEUMÁTICO
DE 2 A 6 MESES</h5>
    <p className="card-text">Para garantizar el elevado estándar de prueba de calidad del producto, las tecnologías, los procesos y los materiales dedicados están a la vanguardia de la fabricación de neumáticos de alto rendimiento.</p>
  </div>  
</div>

</div>
<br/>
<div>
  <div className="conocimiento">
  <h1 className="text-white text-center py-5">CONOCIMIENTO DE LOS NEUMÁTICOS</h1>
  <p className="parrafo text-center text-white py-1">
El neumático es el ÚNICO elemento de contacto entre el vehículo y la carretera/ruta. Es por eso que usar y mantener los neumáticos correctamente, además de conocer sus características, es fundamental para garantizar la seguridad en cualquier situación, aumentar la vida útil de sus neumáticos y ahorrar dinero. Recuerde siempre conducir con seguridad y respetar el medio ambiente.

Si conduce con neumáticos con una profundidad de dibujo de menos de 1,6 mm, podría enfrentar una multa.</p>  
  
  <div className="">
<div className="fondo_rueda">
<img className="rueda" src="https://d3nv2arudvw7ln.cloudfront.net/staticfolder/Tyre/resources/img/sidewall-markings.png" alt="" />
<h1 className="pared m-5">MARCAS
DE PARED LATERAL<p>En la pared lateral del neumático hay varias inscripciones diferentes. Además del nombre de la marca y el rango, el tamaño y las características de los neumáticos están marcados: ancho nominal, relación entre la altura nominal de la sección y el ancho nominal de la sección, estructura o código de construcción, diámetro de la llanta e índice de carga y velocidad.</p></h1>
</div>
</div>

</div>
</div>
<br/>
<h1 className="text-center">MANTENIENDO VICTORIAS
DEPORTIVAS</h1>
<img className="img-fluid" src="https://d3nv2arudvw7ln.cloudfront.net/staticfolder/Tyre/resources/gfx/v2/whypirelli/pirelli_heritage_02.jpg" alt="" />
</div>
        </div>
    );
}

export default PaginaDeInicio;