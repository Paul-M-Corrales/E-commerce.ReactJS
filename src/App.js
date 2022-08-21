import './App.css';

function App() {
  let imagen = "img/Smart Tv Hd 32.webp";
  let titulo = "Smart TV HD 32” Philips 32PHD6825";
  let precio = 46.999;
  let imagenMarca = "img/Phillips.webp";
  let marca = "Phillips";


  return (
    <div className='container'>
      <div className='row'>
      <div className='col-md-4 offset-md-2'>
        <img src={imagen} alt={titulo} className= "img-fluid"/>
      </div>
      <div className='col-md-4'>
      <img src={imagenMarca} alt={marca} className= "img-fluid"/>
        <p>{titulo}</p>
        <p><b>${precio}</b></p>

      </div>
      </div>
    </div>
  );
}

export default App;
