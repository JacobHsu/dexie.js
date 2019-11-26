import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import db from './store/db'

function App() {
  
  useEffect(() => {

    db.wallet.put({
      name:"ETH 錢包", 
      coinId:"ETH", 
      address:"0xd9538901149f47890C334218Ae741e665B0AF396"
    })

    //db.wallet.where("coinId").anyOf("ETH").delete();

    db.wallet.toArray((wallets)=>{
      console.log( wallets ) 
    })
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
