import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';

function App() {

  return (
    <div className='container-fluid'>
     <BrowserRouter> 
     <NavBar />
     <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/:categoriaId' element={<ItemListContainer/>} />
      <Route path='/item/:Id' element={<ItemDetailContainer/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
