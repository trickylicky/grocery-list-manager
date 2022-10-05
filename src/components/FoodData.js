import { useEffect } from "react";

export default function FoodData(){
   return (useEffect(()=>{
        fetch(" http://localhost:3000/food")
        .then(response => response.json())
        .then(data => console.log(data))
    },[]))

}