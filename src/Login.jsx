import Rotate from "./Rotate"
import { useEffect, useState } from "react" 
import Credentials from "./Credentials"
const Login = () => { 
  let[states,setstates]=useState(false)  
  
useEffect(()=>{
  setTimeout(()=>{
setstates(true)
  },4000)
},[])  
  return ( 
    <div>  
    {  
      states===false?<Rotate/>:<Credentials/>  
    }
    </div>
   
  )
}

export default Login