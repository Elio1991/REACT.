import './App.css';
import './Components/public/styles.css';
import { Route, Routes } from "react-router-dom";
import { Navbar } from './Components/public/Navbar';
import { Main1 } from './Components/public/Main1';
import { Main2 } from './Components/public/Main2';
import { Home } from './Components/public/Home';
import { Footer } from './Components/public/Footer';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
     <Routes>

      <Route exact path={'/'} element={<Home/>} />
      <Route path={'Main1'} element={<Main1/>} />
      <Route path={'Main2'} element={<Main2/>} />
     
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
