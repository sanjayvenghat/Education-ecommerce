
import { Link } from 'react-router-dom'
import halfmoon from './images/halfmoon.webp'
const Meta = () => {
  return (
    <div className="meta lg:flex justify-between items-start">   
    <div>
    <h1 className="text-blue-500 lg:text-4xl text-bold text-3xl">Meta Words : Webinar Series</h1> 
    <p className="text-2l lg:my-2">Insights on Semi- Conductor Industry - VLSI</p>  
    <p className='lg:my-2'>This webinar talks about how the global semiconductor industry is projected to become a trillion-dollar industry by 2030.</p>
     <p className='lg:my-2'>Presenter:</p>
     <p className='lg:my-2'>Mr.Piyush Upadhyay</p> 
     <p className='lg:my-2'>Senior Lead Design Engineer, NXP</p> 
     <div className=" flex justify-start my-2">  
     <Link to="pastwebinar"> <p className="p-2 recweb rounded">Past Webinar</p> </Link>
    <Link to="seeallrec"><p className="p-2 recweb rounded mx-2">See all webinar</p></Link>
     
     </div>  
    </div>  
    <div> 
    <img src={halfmoon} alt='halfmoon' className='metaimg'></img>
    </div>

   
    </div>
  )
}

export default Meta