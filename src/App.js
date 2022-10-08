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
  const [newId , setNewId] = useState(null)

 
  
  useEffect(()=>{
      fetch(url)
      .then(response => response.json())
      .then(data=>{
        setFoodData(data)
        console.log(data)
      })
  },[url])
  function displayProduct(id ,food ,price){
    const newFood = {id ,food ,price}
    //setBots(bots.map(bot => id ===bot.id ? {...bot, isCast:cast}:bot)
   //{newId === null ? setNewId(newFood): setNewId()}

    setNewId(newId === null ? newFood : {...newId ,...newFood} )
    console.log(newId);
   //{newId === null ? newFoodData = (foodData.map(foods => id ===foods.id ? {...newId ,foods}:null))}

    // console.log(newId);
   }
    
  return (
    <div className="App">
        <Navbar/> 
        <div className='container'>
        <Routes>
        
          <Route path='/' element={<Home foodData={foodData} display={display} setDisplay={setDisplay} handleClick={handleClick} displayProduct={displayProduct}/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Products' element={<Products foodData={foodData} url={url} newId={newId}/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;
