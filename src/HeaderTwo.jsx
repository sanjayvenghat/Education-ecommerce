import { PiStudent } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";  
import { FaAmazon } from "react-icons/fa";
import { SiInfosys } from "react-icons/si"; 
import { useState } from "react";
import { context } from "./App"; 
import { SiCognizant } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5"; 
import { RiJavaLine } from "react-icons/ri"; 
import { FcLinux } from "react-icons/fc"; 
import { FaAws } from "react-icons/fa6"; 
import { GiArtificialHive } from "react-icons/gi" 
import { SiHcl } from "react-icons/si";
const HeaderTwo = () => {
  const nextval = useContext(context); 
 
  const [isMobile, setIsMobile] = useState(false)
 
//choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 720) {
      setIsMobile(true) 
      console.log(isMobile)
  } else {
      setIsMobile(false)
  }
}
useEffect(()=>{ 
  if(window.innerWidth<720)
    setIsMobile(true)

},[])

useEffect(() => {
  window.addEventListener("resize", handleResize)
})
  


  return (
    <div className="headerTwo flex justify-between items-center m-6 ">
      <h1 className=" live2 text-3xl font-bold">
        <span className="text-red-500">Live</span>
        <span className="text-blue-500">Wire</span>
      </h1>
      <div className="headertwoContext flex" ref={nextval.nextval}> 
      {  !isMobile &&
      <div className="dropdown courses">
      <p className="dropbtn text-xl mx-2">Placement Partners</p> {/* Button for dropdown */}
      <div className="dropdown-content"> 
        
        <Link to="/java"><SiInfosys className="text-blue-500"/> Infosys</Link>
        <Link to="/linux"><FaAmazon className="text-orange-300" />Amazon</Link>
        <Link to="/aws"><SiHcl className="text-red-500" /> Hcl</Link>
        <Link to="/machine-learning"><SiCognizant className="text-green-500"/>CTS</Link>
      </div>
    </div>
  
      } 
      {
        isMobile &&  
        <div className="dropdown courses">
      <select className="dropbtn text-xl mx-2" 
      style={{
        border:"none", 
        outline:"none",
        background:"none"
      }}>
     
        <option> <Link to="/java"><SiInfosys className="text-blue-500"/> Infosys</Link></option>
       <option><Link to="/linux"><FaAmazon className="text-orange-300" />Amazon</Link></option>
        <option><Link to="/aws"><SiHcl className="text-red-500" /> Hcl</Link></option>
        
        <option><Link to="/machine-learning"><SiCognizant className="text-green-500"/>CTS</Link> </option>
        </select>
      
    </div> 
       
      }
        {!isMobile && <div className="dropdown courses">
          <p className="dropbtn text-xl mx-2">Courses</p> {/* Button for dropdown */}
          <div className="dropdown-content"> 
            <Link to="/python"><IoLogoPython style={{
              color:"yellow"
            }} /> Python</Link>
            <Link to="/java"><RiJavaLine className="text-blue-600" /> Java</Link>
            <Link to="/linux"><FcLinux /> Linux</Link>
            <Link to="/aws"><FaAws className="text-blue-300" /> AWS</Link>
            <Link to="/machine-learning"><GiArtificialHive className="text-green-500"/>Machine Learning</Link>
          </div>
        </div>} 
        {isMobile && <div className="dropdown courses">
          <select className="dropbtn text-xl mx-2" style={{
            border:"none", 
            outline:"none",
            background:"none"
            
          }}> {/* Button for dropdown */}
          
            <option to="/python"><IoLogoPython style={{
              color:"yellow", 
             
            }} /> Python</option>
            <option to="/java"><RiJavaLine className="text-blue-600" /> Java</option>
            <option to="/linux"><FcLinux /> Linux</option>
            <option to="/aws"><FaAws className="text-blue-300" /> AWS</option>
            <option to="/machine-learning"><GiArtificialHive className="text-green-500"/>Machine Learning</option>
          </select>
        </div>}
        <Link to="/webinar">
          <p className="text-xl mx-2">Webinar</p>
        </Link>
        <Link to="/franchise">
          <p className="text-xl mx-2">franchise</p>
        </Link>
        <div className="flex">
          <Link to="/login"> 
            <p className=" logins text-md mx-5 my-1 me-5 rounded flex justify-center items-center">
              Student Login
              <span>
                <PiStudent className="text-white" />
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;
