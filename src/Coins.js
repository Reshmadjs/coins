import React from 'react'

const Coins = ({name,image,current_price,total_volume,price_change_percentage_24h}) => {
  return (
    <div className='container'>
      <div className='col-md-10'>
         <table className='table'>
        <tbody>
          <tr>
            <td>
              <div>
               <img src={image} alt='crypto' width="5%" height="5%"/>
               {name}
              </div>
             </td>
            <td>  ${current_price} </td>
            <td> ${total_volume.toLocaleString()} </td>
            <td> {
            price_change_percentage_24h<0 ? (
                <p className='bg-danger'>{price_change_percentage_24h.toFixed(2)}%</p>
            ) : (<p className='bg-success'>{price_change_percentage_24h.toFixed(2)}%</p>)
        } </td>
          </tr>
        </tbody>
      </table>
      </div>
     



    {/* <div className='row'>
        <div className='col-md-3'>
        <img src={image} alt='crypto'/>
        <h3>{name}</h3>
        <p>${current_price}</p>
        <p>${total_volume.toLocaleString()}</p>
        {
            price_change_percentage_24h<0 ? (
                <p className='bg-danger'>{price_change_percentage_24h.toFixed(2)}%</p>
            ) : (<p className='bg-success'>{price_change_percentage_24h.toFixed(2)}%</p>)
        }
        </div>
    </div> */}


    </div>
  )
}

export default Coins