import {Link} from 'react-router-dom'
const Topcourses = ({value,learning,update}) => {  
  let learn=learning?learning.toLowerCase():""; 
  let replace=learn.replace(" ","") 
  let routing=replace.replace(" ","")


  return (
    <div className={`${value} rounded m-5 comman `}>   
    <h3 className="text-center text-white ">{learning}</h3> 
    <p className="text-white text-center learn">{update}</p>  
    <p className='p-3  learn text-white learning rounded'><Link to={`/${routing}`}>LearnMore</Link> </p>
    

    

    </div>
  )
}

export default Topcourses