import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');


  useEffect(() => {
    Axios.get('https://api.quotable.io/random')
    .then(res => {
        console.log(res);
        setQuote(res.data.content);
        setAuthor(res.data.author);
    })
    .catch( err =>{
        console.log(err);
    });
    },[])

  
  return (
    <div className="App">
      <div className="content-card">
        <p className="main-content">{quote}</p>
        <p className="right-content">{author}</p>
      </div>
    </div>
  );
}

export default App;
