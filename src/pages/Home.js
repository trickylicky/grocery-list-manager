import FoodData from "../components/FoodData";

const Home = ()=>{
    return (
        <div className="homePage">
            <h1>
                GROCERY TRACK 
            </h1>
            <img src={"https://images.pexels.com/photos/9706139/pexels-photo-9706139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} className="App-logo" alt="logo" />
            <div>
            <>
          <caption>Our Client Data</caption>
          {/* <tr>
            <th>Id</th>
            <th>Name</th>
            <th>City</th>
            <th>country</th>
            </tr>
          <tbody>
          {foodData().map(({id,firstName,lastName,email,gender}) =>(
            <tr key={id}>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{gender}</td>
          </tr> */}
          {/* ))} */}
          {/* </tbody> */}
          
        </>
            </div>
        </div>
    )
}
export default Home;