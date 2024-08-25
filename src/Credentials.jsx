import Split from "./Split";  
import Access from "./Access";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
const Credentials = () => {  
    let[val,setval]=useState(false) 
    let[second,seconds]=useState(false) 
    let[place,setplace]=useState("mail") 
    let[change,setchange]=useState("") 
    let[success,successs]=useState("") 
    let[err,seterr]=useState(false) 
    
    function Changer()
    {
        setval(true)
        seconds(false)     
    } 
    function changer2() 
    {
        seconds(true) 
        setval(false)
    }  
    let navi=useNavigate()
    let Otp=()=>{
        let Num=Number(change)  
        try 
        { 
            if (typeof change === "undefined") {
                throw new Error("change is undefined");
            }
            function one()
            {
                successs(true) 
                setTimeout(() => { 
                    navi("/")
                    
                }, 3000);
            }
            if(place==="mobile" && change.length===10 && typeof Num==="number") 
                {
                   one() 
                }   
                else if(place==="mobile" && change.length>0 && change.length<10)
                {
                    seterr(true) 
                    setTimeout(()=>{
                        seterr(false)
                    },3000)
                }  
                
                else if(change.includes("@gmail.com"))
                {
                    one()
                }  
                 
            }
        catch(e) 
        {
             
            alert("please enter a valid data")
        }
    }
    useMemo(()=>{ 
        val===true?setplace("mail"):setplace("mobile")
    },[val])
  return (
    <div className="login flex justify-center items-center "> 
    
    
   
      <div className="loginDetails bg-white rounded">
        <h1 className="text-3xl text-center my-5 font-bold">
          <span className="text-red-500">Live</span>
          <span className="text-blue-500">Wire</span>
        </h1> 
        <Split val={val} setval={setval} second={second} seconds={seconds} changer2={changer2} Changer={Changer}/>
        <div className="getinfo flex justify-center items-center">
          <input
            type="text"
            className="textfield p-2 rounded "
            placeholder={place}
            required="true" 
            onChange={(e)=>setchange(e.target.value)}
          ></input>
          <button className="my-4 bg-blue-500 p-3 rounded text-white hover:bg-blue-100" onClick={()=>Otp()}>Get Otp</button>  
          { 
            success===true && <p className="text-2xl text-white bg-green-500 p-2 rounded my-7">Login success</p>} 
            { 
                err===true && <p className="text-2xl text-white bg-red-500 p-2 rounded my-7">please enter a valid data</p>
            }   
           
            <Access/>
            
            
        </div>
      </div>
    </div>
  );
};

export default Credentials;
