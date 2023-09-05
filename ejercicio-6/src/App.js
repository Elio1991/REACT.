import './App.css';
import {Route, Routes} from "react-router-dom";
import { Footer } from './components/Public/Footer';
import  Main  from './components/Public/Main';
import { Navbar } from './components/Public/Navbar';
import { Details } from './components/Public/Details';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
    <Route exact path={'/'} element={<Main/>}/>
    <Route path={'/detail/:id'} element={<Details/>}/>
    {/* <Route exact path={'/'} Element={Main}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
