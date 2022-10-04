import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
        <Navbar/> 
        <div className='container'>
        <Routes>
        
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Products' element={<Products/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;
