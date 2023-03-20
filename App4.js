//import './App.css'; 
import React from "react";
import {useState} from "react"; 



//Its about adding Goal by time function 

function AddGoals(props){
  const [form,setForm]=useState({Goal:"",By:""});
  const HandleSubmit=(e)=>{
    e.preventDefault();
    props.onAdd(form);
    setForm({Goal:"",By:""});
  }
  const HandleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  }
  return(
    <div className="AddGoals">
      <form onSubmit = {HandleSubmit}>
          <div>
            <h1>My Litte Lemon</h1>
            <label>Goal:</label>
            <input type="text" name="Goal" value={form.Goal} onChange={HandleChange}/>
            <label>By:</label>
            <input type="text" name="By" placeholder="by" value={form.By} onChange={HandleChange}/>
            <button color="green">Submit</button>
          </div>
      </form>
    </div>
  );
  
}

//Its about showing all Added goals


function ShowAll(props){
    return(
      <ul>
        {props.allgoals.map((g)=> (
          <li key={g.Goal}><span>My goal is {g.Goal}, by {g.Val}</span></li>
        ))}
      </ul>
    );
}


//Main funtion of app

function App() { 
 
 const [allgoals,setAllgoals]=useState([]);
 const updateGoal=(goal)=>{
  setAllgoals([...allgoals,goal]);
 }
 return ( 
   <div className="App"> 
   //calling update funtion with addon goal
    <AddGoals onAdd={updateGoal}/>
   //showing all goals
    <ShowAll allgoals={allgoals}/>
   </div> 
 ); 
} 

export default App; 
