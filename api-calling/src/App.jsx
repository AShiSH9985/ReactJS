import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  async function getData(){
  const res= await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data=await res.json()  
  console.log(data)
  }
 
  const [data, setdata] = useState([])

  const GetData=async()=>{
    const response=await axios.get('https://picsum.photos/v2/list')
    setdata(response.data)
  }
   
  

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <br />
      <button onClick={GetData}>Get Data</button>
      {data.map(function(elem,idx){
        return <h3>hellox {elem.author} {idx+1}</h3>
      })}

    </div>
  )
}

export default App