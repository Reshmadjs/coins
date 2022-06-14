import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coins from './Coins';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
        //  console.log(res.data)
      }).catch(error => console.error())

  }, [])

  const searchBar = e => {
    setSearch(e.target.value)
  }
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="App">
      <div className="row form-group">
        <div className='offset-md-4 col-md-4'>
          <label>Search a currency</label>
          <input type='text' className='form-control' placeholder='Search a currency here..' value={search} onChange={searchBar} />
        </div>
      </div>
      <div className='row'>
      {
        filteredCoins.map(coin => {
          return (
            <Coins key={coin.id} image={coin.image} name={coin.name} current_price={coin.current_price} total_volume={coin.total_volume} price_change_percentage_24h={coin.price_change_percentage_24h} />
          )
        })
      }
      </div>
      
    </div>
  );
}

export default App;
