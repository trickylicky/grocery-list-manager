

const Home = ({foodData})=>{
    return (
            <div className="homePage">
                <h1>
                    GROCERY TRACK 
                </h1>
                
                <img src={"https://images.pexels.com/photos/9706139/pexels-photo-9706139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} className="App-logo" alt="logo" />
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
                    {foodData.map((food)=>
                        <tr key={food.id}>
                            <td>{food.id}</td>
                            <td>{food.food}</td>
                            <td>{food.price}</td>
                        </tr>
                    )}
                </table>
            </div>
        </div>
    )
}
export default Home;