import React from 'react'
import { useState } from 'react'



export default function Search({foodData, displayProduct}) {
    const [query ,setQuery] = useState("")
  return (
    <>
    <input type="text" placeholder='search...' className='search' onChange={e=> setQuery(e.target.value)}/>

    <div className='card'>
        <h1>search products here</h1>
       
        {foodData.filter(food=>
        food.food.toLowerCase().includes(query)
        ).map((food)=>
        <div key={food.id} className="card">
        <div className="container" onClick={() => displayProduct(food.id)}>
          <h4><b>{food.food}</b></h4>
          <p>{food.price}</p>
        </div>
      </div>)
        }
    </div>
    
    
    
    
    
    
    
    {/* {foodData.filter((food)=> 
    food.food.toLowerCase().includes(query)
    .map(food=>(
        <tr key={food.id}>
            <td>{food.id}</td>
            <td>{food.food}</td>
            <td>{food.price}</td>
        </tr>
    ))

        // return (
        //     <tr key={food.id}>
        //             <td>{food.id}</td>
        //             <td>{food.food}</td>
        //             <td>{food.price}</td>
        //     </tr>
        //     )
        
    )} */}
    </>
  )
}
