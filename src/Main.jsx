import "./index.css";  
import { Design } from "./Design"; 
import BlockChain from "./BlockChain"; 
import Pastwebinar from "./Pastwebinar"; 
import SeeRec from "./SeeRec"; 
import Ai from "./Ai"; 
import Industry from "./Industry";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import App from "./App";  
import Kotlin from "./Kotlin"; 
import DataScience from "./DataScience"; 
import MeachineLearning from "./MeachineLearning"; 
import Python from "./Python"; 
import Deeplearning from "./Deeplearning"; 
import NLP from "./NLP";
import Java from "./Java"; 
import Php from "./Php";
import { createBrowserRouter } from "react-router-dom";
import Webinar from "./Webinar";
import Franchise from "./Franchise";
import Login from "./Login";
import Contact from "./Contact";
import Newaccount from "./Newaccount";
import ArtificialIntelligence from "./ArtificialIntelligence";
const Main = () => {  
    let[val,setval]=useState([]) 
    let[changeone,changes]=useState('') 
    let[changtwo,changetwos]=useState('') 
    let[changethree,changethrees]=useState('') 
   let[save,saves]=useState('')
    
    let router = createBrowserRouter([
        {
          path: "/",
          element: <App save={save} saves={saves}/>,
        },
        {
          path: "webinar",
          element: <Webinar />,
        },
        {
          path: "franchise",
          element: <Franchise />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "newaccount",
          element: <Newaccount value={{val,setval,changeone,changes,changtwo,changetwos,changethree,changethrees,save,saves}} />,
        }, 
        {
          path:"java",
          element:<Java/>
        } 
        ,{
          path:"kotlin",
          element:<Kotlin/>
        } 
        ,{
          path:"php",
          element:<Php/>
        } 
        , 
        {
          path:"design", 
          element:<Design/>
        } 
        , 
        {
          path:"blockchain", 
          element:<BlockChain/>
        } 
        ,{
          path:"artificalintelligence", 
          element:<Ai/>
        } 
        ,
        {
          path:"industry 4.0", 
          element:<Industry/>
        } 
        ,{
          path:"artificialintelligence", 
          element:<ArtificialIntelligence/>
        } 
        , 
        {
          path:"datascience",
          element:<DataScience/>
        } 
        ,{
          path:"meachinelearning", 
          element:<MeachineLearning/>
        } 
        ,{
          path:"deeplearning",
          element:<Deeplearning/>
        } 
        ,{
          path:"python",
          element:<Python/>
        } 
        ,{
          path:"naturallanguageprocessing", 
          element:<NLP/>
        } 
        ,{
          path:"pastwebinar", 
          element:<Pastwebinar/>
        } 
        ,{
          path:"seeallrec",
          element:<SeeRec/>
        }
      ]);
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default Main