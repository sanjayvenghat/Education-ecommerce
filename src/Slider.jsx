import { useContext } from "react" 
import { slider } from "./App" 
import { FaAngleLeft } from "react-icons/fa"; 
import { FaAngleRight } from "react-icons/fa";
const Slider = () => { 
    let {sliderval,left,right}=useContext(slider) 
  
  return (
    <div className="slider  flex rounded" ref={sliderval}>   
    

    <div className="img1 rounded flex justify-between items-center">  
    <FaAngleLeft  
    role="button" 
    className="left text-green-400"
    onClick={()=>left()}/> 
    <FaAngleRight role="button" 
    className="right text-green-400" 
    onClick={()=>right()}/>
    </div>  
    <div className="img2 rounded rounded flex justify-between items-center">  
    <FaAngleLeft  
    role="button" 
    className="left text-green-400"
    onClick={()=>left()}/> 
    <FaAngleRight role="button" 
    className="right text-green-400" 
    onClick={()=>right()}/>
    </div> 
    <div className="img3 rounded rounded flex justify-between items-center">  
    <FaAngleLeft  
    role="button" 
    className="left text-green-400"
    onClick={()=>left()}/> 
    <FaAngleRight role="button" 
    className="right text-green-400" 
    onClick={()=>right()}/>

    </div>
    
   


    </div>
  )
}

export default Slider