import ItemListContainer from './components/containers/itemListContainer/itemListContainer.jsx'
import Navbar from './components/navbar/navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

function App() {

  return (
    <nav>
      <Navbar/>
      <ItemListContainer greeting = {'Hola, esta es mi primera entrega de proyecto'}/>
    </nav>
  )
}

export default App