import { useState } from "react";
import Form from "../components/Form";
import RenderFormList from "../components/RenderFormList";


const Products = ({url})=>{
    const [food , setFoodName] = useState("")
    const [price , setprice] = useState("")
    const [datas ,setDatas] = useState([])
    const [foodList ,setFoodList] =useState("")
    const [priceList , setPriceList] =useState("")
    

    function addProducts(e){
        e.preventDefault()
        const foodData = {food , price}
    
        console.log(foodData)
        //post data to the url provided
        const requestOptions = {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify(foodData)};
                            fetch(url, requestOptions)
                            .then(response => response.json())
                            .then(data => console.log(data.id));

    }
    function addList(e){
        e.preventDefault()
        const dataList = {foodList , priceList }
        setDatas([dataList , ...datas])
        console.log(datas);
    }


    return (
        <>
        <Form onSubmission={addProducts} 
        title ={"ADD PRODUCT AND THEIR PRICES FROM YOUR LOCAL STORE"}
        valueSetFoodName={setFoodName} 
        valueSetPrice={setprice}  
        valuePrice={price} 
        valueFood={food} />

        <Form onSubmission={addList}
        title={"ADD A BUDGET LIST BELOW"}
        valueSetFoodName={setFoodList} 
        valueSetPrice={setPriceList}  
        valuePrice={priceList} 
        valueFood={foodList}/>

        <h1>ADDED ITEMS WILL BE DISPLAYED BELOW :</h1>
        <RenderFormList datas={datas} />
        </>
        
    )

}
export default Products;