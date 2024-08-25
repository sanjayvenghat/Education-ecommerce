import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { FaBars } from "react-icons/fa6";
import { context } from "./App";
import { Link } from 'react-router-dom';
import { RxExit } from "react-icons/rx"; 

const Header = () => {
  let { val, toggler_value,save,saves } = useContext(context); 
  function exit() 
  {
   saves("") 
  
  }
  return (
    <div className="header flex justify-between items-center">
      <h1 className="text-3xl font-bold live1">
        <span className="text-red-500">Live</span>
        <span className="text-blue-500">Wire</span>
      </h1>
      <div className="contextOne flex mx-6" ref={val}>
        <p className=" text-xl mx-2 hover:bg-blue-200 rounded">Internship</p> 
        <p className="text-xl mx-2 hover:bg-blue-200 rounded">Student Corner</p>
        <p className="text-xl mx-2 hover:bg-blue-200 rounded">Blog</p>
        <p className="text-xl mx-2 hover:bg-blue-200 rounded">About Us</p>
      </div>
     
      <div className="contextTwo flex ">
        <p className="intern text-xl text-green-500 mx-2">Playstore</p>
        <div className="flex justify-center items-center">
        <FaRegUserCircle style={{
          fontSize: "25px",
        }}/>
          {   
            save!==""?<span className="mailing me-4 mx-4 ">{save}</span>:<Link to="/newaccount" className='mailing  me-4 mx-4 '>Login</Link>
        } 
        <RxExit   
        
        role="button" 
        onClick={()=>exit()}
        style={{
          fontSize: "25px", 
          color:"red",
          marginRight:"10px"
        }} 
      />
        </div>
      </div>
      <FaBars className="text-4xl icon" onClick={() => toggler_value()} />
    </div>
  );
};

export default Header;
