import React from "react"

const Contacto = () => {
    return(
        <div>
            <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" />
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Telefono</label>
    <input type="number" class="form-control" id="inputphone" placeholder="numero"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Telefono alternativo</label>
    <input type="number" class="form-control" id="inputphone2" placeholder="numero"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Seleccione provincia</label>
    <select id="inputState" class="form-select">
      <option selected>Elegir...</option>
      <option>Buenos Aires</option>
      <option>Catamarca</option>
      <option>Chaco</option>
      <option>Chubut</option>
      <option>Entre Ríos</option>
      <option>Río Negro</option>
      <option>Salta</option>
      <option>Santa Cruz</option>
      <option>Santa Fe</option>
      <option>Tucumán</option>
      <option>Ciudad Autónoma de Buenos Aires</option>
      <option>Córdoba</option>
      <option>Corrientes</option>
      <option>Formosa</option>
      <option>Jujuy</option>
      <option>La Pampa</option>
      <option>La Rioja</option>
      <option>Mendoza</option>
      <option>Misiones</option>
      <option>Neuquén</option>
      <option>San Juan</option>
      <option>San Luis</option>
      <option>Santiago del Estero</option>
      <option>Tierra del Fuego</option>

    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Codigo Postal</label>
    <input type="number" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        No soy un robot
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
</form>
        </div>
    )
}

export default Contacto;