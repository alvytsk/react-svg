import React, { useState, useEffect } from 'react';
import Scheme from './Scheme.js'
import Gnss from './Components/Gnss/Gnss'
import './App.css';

function App() {
  const [data, setData] = useState([
  {
    id: "rect1",
    color: "yellow",
    name: "Block 1"
  },
  {
    id: "rect2",
    color: "red",
    name: "Block 2"
  },
  {
    id: "rect3",
    color: "green",
    name: "Block 3"
  }]);

  useEffect(() => {
    setTimeout(() => {
      data[0].color = "blue";
      data[2].color = "yellow";
      setData([
        ...data,
      ]);

    }, 5000);
  });


  return (
    <div className="App">
      <header className="App-header">

        {/* <Scheme rects={data} /> */}
        <Gnss />

      </header>
    </div>
  );
}

export default App;
