import React from 'react'

function Form({onSubmission , valueFood , valuePrice , valueSetFoodName , valueSetPrice , title}) {
  return (
    <form onSubmit={onSubmission} className="card">
        <h1>{title}</h1>
        <label htmlFor="foodName">
            foodName :<br/>
            <input type="text" name="foodName" value={valueFood} onChange={e=>{valueSetFoodName(e.target.value)}}/><br/>
        </label>
        <label htmlFor="price">
            price : <br/>
            <input type="text" name="price" value={valuePrice} onChange={e=> valueSetPrice(e.target.value)}/><br/><br/>
        </label>
        <input type='submit' value="Add Products"/>
        </form>
  )
}

export default Form