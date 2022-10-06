import React from 'react'
import { useState } from 'react'



export default function Search({foodData}) {
    const [query ,setQuery] = useState("")
  return (
    <>
    <input type="text" placeholder='search...' className='search' onChange={e=> setQuery(e.target.value)}/>

    <table className='product-table'>
        <caption>search products here</caption>
        <tr>
        <th>Food Products</th>
        <th>price</th>  
        </tr>
        {foodData.filter(food=>
        food.food.toLowerCase().includes(query)
        ).map(food=>(
            <tr key={food.id}>

                            <td>{food.food}</td>
                            <td>{food.price}</td>
                        </tr>
        )
            )
        }
    </table>
    
    
    
    
    
    
    
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
