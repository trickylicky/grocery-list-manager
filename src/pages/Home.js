import FoodData from "../components/FoodData";

const Home = ({foodData, display ,setDisplay ,handleClick})=>{
    return (
            <div className="homePage">
                <h1>
                    GROCERY TRACK 
                </h1>
                <img src={"https://images.pexels.com/photos/9706139/pexels-photo-9706139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} className="App-logo" alt="logo" /><br/>
                <button className="display" onClick={handleClick}>display all available Items</button>
                {display ? <FoodData foodData={foodData} /> : "click button to display Food Products"}
        </div>
    )
}
export default Home;