import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

const URL = "https://www.boredapi.com/api/activity"

function App() {

  const [type, setType] = useState("");
  const [activity, setActivity] = useState("")
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    getData();
  }, [])

  function getData() {
    axios.get(URL)
      .then((response) => {
        setActivity(response.data.activity);
        setType(response.data.type);
      }).catch(error => {
        alert(error)
      });
  }

  const handleClick = () => {
    setCounter(counter + 1);
    getData();
    document.getElementById("clicks").style = "block";
  }

  return (
    <div id='container'>
      <header>
        <h1>Bored? Here's something to do</h1>
      </header>
      <div>
        <h3>{activity}</h3>
        <p> What kind of activity is this:</p>
        <p>{type}</p>
        <button id='button' onClick={handleClick}>Give me another one</button>
        <p id='clicks' style={{ display: "none" }}>Nothing interesting?  You have pressed "Give me another one" button: {counter} time(s)</p>
      </div>
    </div>
  );
}

export default App;
