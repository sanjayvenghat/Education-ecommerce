import ndsc from './nsdc.webp'  
import skill from './images/skill.webp'
import partner from './images/partner.webp' 
import future from './images/future.webp'
const StrategicPartner = () => {
  return ( 

    <div className="strategic_partner flex  items-center rounded my-5"> 
    <div className='text-blue-500 text-3xl mx-2'>strategic partner</div>  
    <div className='large lg:flex justify-evenly'> 
    <img src={ndsc} alt='nothing found' className='imgs'></img>  
    <img src={skill} alt="skill" className='imgs'></img>
    </div>
    <div className='large lg:flex lg:justify-evenly '>
    <img src={partner} alt='partners' className='imgs'></img>  
    <img src={future} alt='future skills' className='imgs'></img>
    </div>
    

    </div>
  )
}

export default StrategicPartner