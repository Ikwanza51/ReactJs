import React,{ useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  var [quote,setQuote] = useState({slip : {
    advice : 'You are in Advice Panel'
  }});
  const api_url = `https://api.adviceslip.com/advice/${Math.random() * (225)}`
  
  const nextQoute = () => {
    console.log('Getting New Quote....')
    axios.get(api_url).then( (response) => {
      setQuote(response.data);
    })
    console.log('Quote Generation Done....')
  }

  return (
    <div className='container'>
      <p className='quote'>
        { quote.slip.advice }
      </p>
      <button className='button' onClick={nextQoute}>NEXT</button>
    </div>
  );
}

export default App;
