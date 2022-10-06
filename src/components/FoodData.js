import React from 'react'

export default function FoodData({foodData}) {
  return (
    <div>
                <table className="product-table">
                     <caption>Available products</caption>
                    <tr>
                    <th>Id</th>
                    <th>Food Products</th>
                    <th>price</th>
                    </tr>{
                        console.log(foodData)
                    }
                    {
                    foodData.map((food)=>
                        <tr key={food.id}>
                            <td>{food.id}</td>
                            <td>{food.food}</td>
                            <td>{food.price}</td>
                        </tr>
                    )}
                        
                         


                </table>
            </div>
  )
}
