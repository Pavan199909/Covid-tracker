import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const[data,setData] = useState([]);
  useEffect(()=>{
    fetch('https://data.covid19india.org/data.json').then(res => res.json())
  .then((jsondata)  => setData(jsondata.statewise));
},[])
  return (
    <div className="App">
     <h1>Covid Tracking Dashboard</h1>
     <table className="table table-hover bg-primary text-white">
      <thead>
        <tr>
          <th>State</th>
          <th>Confirmed</th>
          <th>Recovered</th>
          <th>Deaths</th>
          <th>Active</th>
          <th>LastUpdated</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item =>{
          return(
            <tr>
              <td>{item.state}</td>
              <td>{item.confirmed}</td>
              <td>{item.recovered}</td>
              <td>{item.deaths}</td>
              <td>{item.active}</td>
              <td>{item.lastupdatedtime}</td>
            </tr>
          )
        })}
      </tbody>
     </table>
    </div>
  );
}

export default App;
