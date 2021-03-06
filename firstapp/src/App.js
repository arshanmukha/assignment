
import React,{useEffect, useState} from 'react'
import axios from 'axios';

const App = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then((res)=> setData(res.data.meals))
    
      
  },[]) 

  const [data1,setData1] = useState([]);
  useEffect(()=>{
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((res)=> setData1(res.data.meals))
    
      
  },[])
   console.log(data)
   console.log(data)
  return (
    <div>
      <h3>FIRST URL RESULT</h3>
      <div style = {{border:"1px solid black" ,padding:"10px", margin:"20px 100px"}}>
       {data.map(item =><div> <li>{item.idMeal}</li> </div>
       )}
    {data.map(item =><div> <li>{item.strMeal},{item.strTags}</li> </div>
       )}
    {data.map(item =><div> <li>{item.strCategory}</li> </div>
       )}
    {data.map(item =><div> <li>{item.strArea}</li> </div>
       )}
    {data.map(item =><div> <li>{item.strInstructions}</li> </div>
       )}</div>

       <h3 style={{alignItems:"center"}}>SECOND URL RESULT</h3>
       <div style = {{border:"1px solid black" ,padding:"10px", margin:"20px 100px"}}>

     {data1.map(item =><div> <li>{item.strMeal}</li> </div>
       )}
    {data1.map(item =><div> <li>{item.strInstructions}</li> </div>
       )} </div>
  


    </div>
  )
}

export default App