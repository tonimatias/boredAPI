import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

const URL = "https://www.boredapi.com/api/activity"

function App() {

  const [type, setType] = useState("");
  const [activity, setActivity] = useState("")
  const [counter, setCounter] = useState(0)

  /*  useEffect(() => {
     axios.get(URL)
       .then((response) => {
         setActivity(response.data.activity)
         setType(response.data.type)
       }).catch(error => {
         alert(error)
       })
 
   }, [])  */

  

  function getData(/* e */) {
    /* e.preventDefault(); */
    document.getElementById("whatActivity").style = "block";
    document.getElementById("clicks").style = "block";

    axios.get(URL)
      .then((response) => {
        setActivity(response.data.activity);
        setType(response.data.type);
      }).catch(error => {
        alert(error)
      })
      handleClick();
       /* clickCounter(); */
  }

/*   if (document.querySelector("h3").textContent === "") {
    document.querySelector("#button").textContent = "Let's see"
  } else {
    document.querySelector("#button").textContent = "Give me another one"
  }
 */
  const handleClick = () => {
    setCounter(counter + 1)
  }
  /* let clicks = 0;
  function clickCounter() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
  } */

  return (
    <div id='container'>
      
      <header>
        <h1>Bored? Here's something to do</h1>
      </header>
      <div>
        <h3>{activity}</h3>
        <p id='whatActivity' style={{display:"none"}}> What kind of activity is this:</p>
        <p>{type}</p>
        <button id='button' onClick={getData}>Give me another one</button>
        <p id='clicks' style={{display:"none"}}>Nothing interesting?  You pressed "Give me another one" button: {counter} times</p>
      </div>
     
    </div>
  );
}

export default App;
