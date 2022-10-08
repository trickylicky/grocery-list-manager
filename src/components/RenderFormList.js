import React from 'react'

function RenderFormList({datas}) {
    let lastId = 0
  return (
    <ul>
        {datas.length ===0 || datas.length ===1 ? "nothing to display": datas.map(data =>
        <div className='card' key={lastId++}>
          <h3>{data.foodList}</h3>  <p>${data.priceList}</p>
        </div>
        
        )
        }
    </ul>
  )
}

export default RenderFormList;