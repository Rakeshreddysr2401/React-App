//import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
  //const [name, setName] = useState("");
  const [score, setScore]= useState("10");
  const [comment,setComment]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    //setName("");
    if(Number(score)<=5 && comment.length<=10){
      alert("Please enter the comment why the quality is poor");
      return;
    }
    setScore("10");
    setComment("");
    console.log("Form Submited");
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

      
      {/* <fieldset>
        <div className="Field">
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" placeholder="Name" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <button disabled={!name} type="submit">Submit</button>
       </fieldset> */}

       <fieldset>
        <h2>Feedback form</h2>
        <div className="Field">
          <label>Score:{score}</label>
          <input type="range" min="0" max="10" value={score} onChange={e => setScore(e.target.value)}/>
        </div>
        <div className="Field">
          <label>Comment:</label>
          <textarea  value={comment} onChange={e => setComment(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>

       </fieldset>
      </form>


    </div>
  );
}

export default App;
