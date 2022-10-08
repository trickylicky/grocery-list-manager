import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import { useState ,useEffect } from 'react';


function App() {
  const url = "https://groceries-list-manager.herokuapp.com/food"
  const [foodData , setFoodData] = useState([])
  const [display ,setDisplay] = useState(false)


 
  
  useEffect(()=>{
      fetch(url)
      .then(response => response.json())
      .then(data=>{
        setFoodData(data)
        console.log(data)
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
        
          <Route path='/' element={<Home foodData={foodData} display={display} setDisplay={setDisplay} handleClick={handleClick} />}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Products' element={<Products url={url}/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;
