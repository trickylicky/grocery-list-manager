import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import { useState ,useEffect } from 'react';


function App() {

  const [foodData , setFoodData] = useState([])
    
  useEffect(()=>{
      fetch("http://localhost:3000/food")
      .then(response => response.json())
      .then(data=>{
        setFoodData(data)
      })
  },[])
    
  return (
    <div className="App">
        <Navbar/> 
        <div className='container'>
        <Routes>
        
          <Route path='/' element={<Home foodData={foodData}/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Products' element={<Products/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;
