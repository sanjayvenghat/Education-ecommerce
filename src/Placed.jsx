import { useCallback, useRef, useState } from 'react' 
import { useEffect } from 'react' 

import iconstudent  from './images/iconstudent.webp'
const Placed = () => {     
  
    let [corect,setcorect]=useState(true) 
    let width=window.innerWidth
    function changer()
    {
        window.innerWidth>720?setcorect(!corect):setcorect(true)
    }
    useEffect(()=>{ 
      
       window.addEventListener("resize",changer) 
    },[width])    
    
    
    useCallback(()=>{
changer()
    },[width]) 
    useEffect(()=>{
      window.innerWidth>720?setcorect(!corect):setcorect(true)
    },[])
   

    
    let values=useRef() 
    let newarr=[1]
    function moves(value) 
    { 
    let {current}=values 
   

        newarr.push(Number(value))  
       
        let arrays=newarr[(newarr.length)-2]-newarr[(newarr.length)-1] 
        if(arrays===0 || isNaN(arrays)) 
          {
            return 
          }  
        
          current.scrollBy({ left:-arrays*current.offsetWidth, behavior: "smooth" });
  
    }
  return (
    <div className="placed"> 
    <h1 className="text-3xl text-blue-500">Placed students</h1> 
    <p>Get inspired by our placed students</p> 
    <div className="scrollpla"  ref={values}> 
    <div className="placeone">   
    <div className='flex justify-center items-center'>
    <img src={iconstudent} alt='studentimg' className='iconstudent h-10 w-10'></img>
    </div>
   
    <h2 className="text-blue-500 text-center text-xl">Sakshi</h2> 
    <h2 className="text-blue-500 text-center text-xl">PHP developer</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.text of the printing and typesetting industry</p>
    </div>
    <div className="placeone">  
    <div className='flex justify-center items-center'>
    <img src={iconstudent} alt='studentimg' className='iconstudent h-10 w-10'></img>
    </div>
    <h2 className="text-blue-500 text-center text-xl">Myuran</h2> 
    <h2 className="text-blue-500 text-center text-xl"> developer</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.text of the printing and typesetting industrytext of the printing and typesetting industry</p>
    
    </div> 
    
    <div className="placeone">  
    <div className='flex justify-center items-center'>
    <img src={iconstudent} alt='studentimg' className='iconstudent h-10 w-10'></img>
    </div>
    <h2 className="text-blue-500 text-center text-xl">Sam</h2>
    <h2 className="text-blue-500 text-center text-xl">Frontend developer</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.text of the printing and typesetting industry</p>
    </div>
    <div className="placeone">  
    <div className='flex justify-center items-center'>
    <img src={iconstudent} alt='studentimg' className='iconstudent h-10 w-10'></img>
    </div>
    <h2 className="text-blue-500 text-center text-xl">Mansoor</h2> 
    <h2 className="text-blue-500 text-center text-xl">React developer</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industrytext of the printing and typesetting industry.</p>
    </div>
    <div className="placeone">  
    <div className='flex justify-center items-center'>
    <img src={iconstudent} alt='studentimg' className='iconstudent h-10 w-10'></img>
    </div>
    <h2 className="text-blue-500 text-center text-xl">shiro</h2> 
    <h2 className="text-blue-500 text-center text-xl">Flutter developer</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div className="placeone">  
    <div className='flex justify-center items-center'>
    <img src={iconstudent} alt='studentimg' className='iconstudent h-10 w-10'></img>
    </div>
    
    <h2 className="text-blue-500 text-center text-xl">shira</h2> 
    <h2 className="text-blue-500 text-center text-xl">developer</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  
    </div>
    <div className="placeone flex flex-col">  
    <div className='flex justify-center items-center'>
    <img src={iconstudent} alt='studentimg' className='iconstudent h-10 w-10'></img>
    </div>
    <h2 className="text-blue-500 text-center text-xl">mayiri</h2> 
    <h2 className="text-blue-500 text-center text-xl">Tester</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
   
    </div>
   
    </div>  
    {corect &&
    <div className="scrolla flex justify-center">  
   
    <div className="h-3 w-3 bg-gray-200 rounded mx-2 hover:bg-blue-500 rounded mx-2"  onClick={()=>moves(1)}></div>
    <div className="h-3 w-3 bg-gray-200 rounded mx-2 hover:bg-blue-500 rounded mx-2"  onClick={()=>moves(2)}></div>
    <div className="h-3 w-3 bg-gray-200 rounded mx-2 hover:bg-blue-500 rounded mx-2"  onClick={()=>moves(3)}></div>
    <div className="h-3 w-3 bg-gray-200 rounded mx-2 hover:bg-blue-500 rounded mx-2"  onClick={()=>moves(4)}></div>
    <div className="h-3 w-3 bg-gray-200 rounded mx-2 hover:bg-blue-500 rounded mx-2"  onClick={()=>moves(6)}></div> 
    <div className="h-3 w-3 bg-gray-200 rounded mx-2 hover:bg-blue-500 rounded mx-2"  onClick={()=>moves(7)}></div> 
    

    </div> 
    } 
    {
        !corect &&  
        <div className="scrolla flex justify-center"> 
        <div className="h-3 w-3 bg-gray-200 rounded mx-2 hover:bg-blue-500 rounded mx-2"  onClick={()=>moves(1)}></div>
    <div className="h-3 w-3 bg-gray-200 rounded mx-2 hover:bg-blue-500 rounded mx-2"  onClick={()=>moves(2)}></div>
    
</div>
    }
    </div>
  )
}

export default Placed