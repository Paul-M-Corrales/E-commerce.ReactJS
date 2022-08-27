import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className='container-fluid'>
      <NavBar />
      <ItemListContainer greeting="Este es el body" />
    </div>
  );
}

export default App;
