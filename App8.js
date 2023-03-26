import {useState,useEffect} from 'react';
 export default function useFetch(url){
    const[data,setData]=useState(null);
    const[isPending,setIsPending]=useState(true);
    const[error,setError]=useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url).then(res=>{ 
            if(!res.ok){throw Error("Could not fetch the data for the given") }
            return res.json();}
        )
        .then(data=>{setData(data); setIsPending(false); setError(null);})
        .catch((err)=>{setIsPending(false);setError(err.message);})
    },1000);},[url]);
    return {data,isPending,error}
}








//import {} from 'react-router-dom';
//import {useState ,useEffect} from 'react';
import  {CareerList} from './CareerList.js';
import {useFetch} from './useFetch.js';
export default function Military(){

    const{data:careers,isPending,error}=useFetch('http://localhost:8000/careers');
    return(
        <div className="project1">
           {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {careers && <CareerList careers={careers} title="All Careers"></CareerList>}
        </div>
    );
}
             
             
             
             
 const CareerList=({data,title})=>{
    return(
        <div className="careerlist">
            <h2>{title}</h2>
            {data.map((d1)=>(
                <div className="career-preview" keys={d1.id}>
                <h2>Title:{d1.title} key=</h2>
                <p1>Salary:{d1.salary}</p1>
                <p2>Location:{d1.location}</p2>
                </div>)
            )}
        </div>
    )
}
export default CareerList;
