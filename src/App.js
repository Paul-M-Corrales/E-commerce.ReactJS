import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className='container-fluid'>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
