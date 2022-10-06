import Search from "../components/Search";

const Products = ({foodData})=>{

    return (
        <>
        <Search foodData={foodData}/>
        {console.log(foodData)}
        </>
    )

}
export default Products;