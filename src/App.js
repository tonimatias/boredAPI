import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

const URL = "https://www.boredapi.com/api/activity"

function App() {

  const [type, setType] = useState("");
  const [activity, setActivity] = useState("")

  /*  useEffect(() => {
     axios.get(URL)
       .then((response) => {
         setActivity(response.data.activity)
         setType(response.data.type)
       }).catch(error => {
         alert(error)
       })
 
   }, [])  */

  function getData(e) {
    e.preventDefault();
    document.getElementById("whatActivity").style = "block";

    axios.get(URL)
      .then((response) => {
        setActivity(response.data.activity);
        setType(response.data.type);
      }).catch(error => {
        alert(error)
      })

  }
  /* async function getData() {
    
    try {
      const response = await fetch(URL);

      if (response.ok) {
        const json = await response.json();
        setActivity(json.data.activity)
        setType(json.data.type)
      } else {
        alert("Error!")
      }
    }catch (err) {
      alert(err);
    }
  } */

  return (
    <div id='container'>
      <header>
        <h1>Bored? Here is something to do</h1>
      </header>
      <div>
        <h3>{activity}</h3>
        <p id='whatActivity' style={{display:"none"}}> What kind a activity this is:</p>
        <p>{type}</p>
        <button onClick={getData}>Gimme another one</button>
      </div>
    </div>
  );
}

export default App;
