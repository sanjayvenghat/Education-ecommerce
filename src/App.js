import Header from "./Header";
import HeaderTwo from "./HeaderTwo";
import "./App.css";  
import Counts from "./Counts";  
import Trendingcourses from "./Trendingcourses";
import Support from './Support'
import { createContext } from "react";  
import Veido from "./Veido";
import { useRef } from "react";
import Slider from "./Slider";  
import Toptech from "./Toptech";  
import Placed from "./Placed";
import Meta from "./Meta";
import Nascom from "./Nascom";
import StrategicPartner from "./StrategicPartner"; 
import Footer from "./Footer";
export let context = createContext(); 
export let slider=createContext() 
export default function App({save,saves}){ 

  let val = useRef();
  let nextval = useRef(); 
  let sliderval=useRef();
  function toggler_value() {
    let { current } = val;
    let { current: newval } = nextval;
    current.classList.toggle("none");
    newval.classList.toggle("none"); 
    console.log(sliderval);
  } 
  function left() 
  {
let {current}=sliderval  
current.scrollBy({left:-current.offsetWidth,behavior:"smooth"})


  }  
  console.log(context)
  function right() 
  {
    let {current}=sliderval 
    current.scrollBy({left:current.offsetWidth,behavior:"smooth"})
  } 

let vakll="sanjay" 

  
  return(
    <div className="frontend">
      <context.Provider value={{ val, toggler_value, nextval,vakll,save,saves}}>
        <Header />
        <HeaderTwo />
      </context.Provider> 
      <slider.Provider value={{sliderval,left,right}}>   
      <Slider/>  
      <div className="sub"> 
      <StrategicPartner/> 
     
      </div>   
      <div className="sub "> 
      <Support/>
      </div> 
     
     
      
      </slider.Provider> 
      <div className="sub subs lg:my-0"> 
      <Trendingcourses/>  
      
      

      </div> 
      <div className="sub subs lg:my-0 bg-blue-100"> 
      <Nascom className="bg-blue-500"/> 
      
      </div>  
      <div className="sub subs lg:my-0"> 
      <Toptech/>
      
      </div>   
      <div className="sub subs lg:my-0"> 
      <Meta/>
      </div> 
      <div className="sub subs flex justify-center items-center lg:my-0 bg-blue-200"> 
      <Veido/>
      </div> 
      <div className="substo my-5  "> 
      <Placed/>
      </div>
      <div className="sub subs lg:my-0 bg-blue-100"> 
      
      <Counts/>
      </div>   
      <div className="rocky sub subs lg:my-0 bg-blue-100"> 
      
      <Footer/>
      </div>
    </div>
  );
}
