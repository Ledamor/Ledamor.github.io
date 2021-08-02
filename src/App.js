import React, { useState, useEffect } from 'react';
// import WebSocket from 'ws';
import './App.css';

function App() {
  const [a, setCount] = useState(true);
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   const ws = new WebSocket('ws://localhost:8080');

  //   ws.on('open', function open() {
  //     ws.send('what');
  //   });

  //   ws.on('message', function incoming(message) {
  //     setMessages([...messages, { content: message }]);
  //   });
  // }, []);

  const theMessages = messages.map((msg, i) => {
    return (
      <div key={i}>
        <p>{msg.content}</p>
      </div>
    );
  });

  const onButtonClick = () => {
    if (a == true) {
      setCount(false);
    } else {
      setCount(true);
    }
  };

  const getImage = () => {
    return a ? `url("https://ae01.alicdn.com/kf/H3b462052b4994c70a2f50d7ff84fbcf5k/Toys-Peluche-Octopus-Stuffed-Toy-Cotton-Cotton-pulpo-Sad-Happy-Nap-Cotton-Octopus-Home-Two-side.jpg")` : `url("https://pictures.depop.com/b0/6680602/832431645_09d50c1604ea44d2be8510f22fd1f57e/P0.jpg")`;
  };

  return (
    <div className="App" style={{
      backgroundImage: getImage(),
      width: '2000px',
      height: '1000px',
      position: "fixed"
    }}>

      <button className="App-button" onClick={onButtonClick}> MOOD</button>
      
      {theMessages}
    </div>
  );
}

export default App; 
