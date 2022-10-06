import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import { useState ,useEffect } from 'react';


function App() {

  const [foodData , setFoodData] = useState([])
  const [display ,setDisplay] = useState(true)
    
  useEffect(()=>{
      fetch("https://groceries-list-manager.herokuapp.com/food")
      .then(response => response.json())
      .then(data=>{
        setFoodData(data)
      })
  },[])
  function handleClick(){
    display ? setDisplay(false): setDisplay(true)
  }
    
  return (
    <div className="App">
        <Navbar/> 
        <div className='container'>
        <Routes>
        
          <Route path='/' element={<Home foodData={foodData} display={display} setDisplay={setDisplay} handleClick={handleClick}/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Products' element={<Products foodData={foodData}/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;
