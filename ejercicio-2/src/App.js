import './App.css';
import './components/styles.css';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';
import { Icono } from './components/Icono';

function App() {
  
  return (
    <div className="App">
     
      <Icono/>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
