import React from 'react';
import './App.css';
import Product from './Component/Product';

function App() {
  const [theme, setTheme]=React.useState("black");

  return (
   
    <div className="App">
      <div>
       <input value={theme} onChange={(e)=>{setTheme(e.target.value)}}/>

      </div>
        <select
          value={theme}
          onChange={(e) => {setTheme(e.target.value);
          }}
        >
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="aqua">Aqua</option>
        </select>
      <Product title="Counter Component" theme={theme}/>
      <Product title="Counter Component" theme={theme}/>
      <Product title="Counter Component" theme={theme}/>
      <Product title="Counter Component"  theme={theme}/>
      <Product title="Counter Component" theme={theme}/>
      <Product title="Counter Component"  theme={theme}/>
      
    </div>
  );
}

export default App;
