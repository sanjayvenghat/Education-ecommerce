import { useRef } from "react"
import { useState } from "react" 
var newarr=[1]
const Support = () => { 
  let[firstimg,setfirstimg]=useState(false)
  let[secondimg,setsecondimg]=useState(false) 
  let[thirdimg,setthiredimg]=useState(false) 
  let values=useRef()
  function setvalue(value) 
  { 
  let {current}=values 
  console.log(current)
if(Number(value)===1) 
  {
setfirstimg(!firstimg)  
setsecondimg(false) 
setthiredimg(false)

  }  
  else if(Number(value)===2) 
    {
      setsecondimg(!secondimg) 
      setfirstimg(false) 
      setthiredimg(false)
    }
     else if(Number(value)===3) 
      { 
        setfirstimg(false)
        setthiredimg(!thirdimg) 
        setsecondimg(false)
      } 
      
      newarr.push(Number(value))  
     
      let arrays=newarr[(newarr.length)-2]-newarr[(newarr.length)-1] 
      if(arrays===0 || isNaN(arrays)) 
        {
          return 
        } 
        current.scrollBy({ left:-arrays*current.offsetWidth, behavior: "smooth" });

  }
  return (
    <div className="support lg:flex justify-evenly">  
    <div className="sets flex " > 
    <p className="text-2xl font-bold p-1 " onClick={()=>setvalue(1)}>Develop in Learning Skills</p>  
    {firstimg===true && <p style={{
      borderLeft:firstimg?"5px solid yellow":"none"
    }} className="mx-2">get real experience of education and get chance to work in the big MNC company and be a Unique person with skills</p>} 
      <p className="text-2xl font-bold p-1" onClick={()=>setvalue(2)}>comprehensive Learning Experience</p>  
      {secondimg===true && <p style={{
        borderLeft:secondimg?"5px solid yellow":"none"
      }}>get real experience of education and get chance to work in the big MNC company and be a Unique person with skills</p>} 
     <p className="text-2xl font-bold p-1" onClick={()=>setvalue(3)}>Assured Job Placement</p> 
     {thirdimg===true && <p className="mx-2" style={{
      borderLeft:thirdimg?"5px solid yellow": "none"
     }}>get real experience of education and get chance to work in the big MNC company and be a Unique person with skills</p>} 
    </div> 
    <div className="imagerows flex " ref={values}>  
    <div className='firstimg' ></div> 
    <div className='secondimg'></div> 
    <div className='thirdimg'></div>
    </div>
    </div>
  )
}

export default Support