import React from 'react'

function RenderFormList({datas}) {
    let lastId = 0
  return (
    <ul>
        {datas.length ===0 || datas.length ===1 ? "nothing to display": datas.map(data =>
        <li className='card' key={lastId++}>
          {data.foodList}  -- ${data.priceList}
        </li>
        
        )
        }
    </ul>
  )
}

export default RenderFormList;