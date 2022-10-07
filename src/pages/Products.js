import { useState } from "react";

const Products = ({url , newId})=>{
    const [food , setFoodName] = useState("")
    const [price , setprice] = useState("")
  
        function addProducts(e){
            e.preventDefault()
             
        const foodData = {food, price}
        console.log(foodData)
        //post data to the url provided
        const requestOptions = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(foodData)
                        };
                        fetch(url, requestOptions)
                        .then(response => response.json())
                        .then(data => console.log(data.id));
        
        }


    return (
        <>
        <form onSubmit={addProducts}>
        <h1>ADD PRODUCT AND THERE PRICES FROM YOUR LOCAL STORE</h1>
        <label htmlFor="foodName">
            foodName :<br/>
            <input type="text" name="foodName" value={food} onChange={e=>setFoodName(e.target.value)}/><br/>
        </label>
        <label htmlFor="price">
            price : <br/>
            <input type="text" name="price" value={price} onChange={e=> setprice(e.target.value)}/><br/><br/>
        </label>
        <input type='submit' value="Add Products"/>
        </form>

        <h1>SELECTED ITEMS WILL BE DISPLAYED BELOW :</h1><ul>
        {console.log(newId)}
        {newId === null ? "select product": <>
        {newId.food}
        </>}
            </ul>
        </>
        
    )

}
export default Products;