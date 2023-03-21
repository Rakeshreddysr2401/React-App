import React,{useReducer} from 'raect';
import './App.css';

const reducer=(state, action)=>{
  if(action.type === 'buy') return {money:state.money-10};
  if(action.type === 'sell') return {money:state.money+10};
}
function App(){
  const initialState = {money: 100};
  const[state,dispatch]=useReducer(reducer,initialState);
  return(
    <div className="App">
    <h1>Wallet: {state.money}</h1>
    <button onClick={()=>dispatch({type:'buy'})}>Shoping for veggies</button>
    <button onClick={()=>dispatch({type:'sell'})}>Serving meal</button>
    </div>
);
}
export default App;
