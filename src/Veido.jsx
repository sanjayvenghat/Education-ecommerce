import train from './train.mp4'
import ReactPlayer from 'react-player'
const Veido = () => {
  return (
    <div className='veido  lg:flex lg:flex-row flex-col justify-center items-start'>   
    <div className='alumni flex justify-center items-center'> 
    <div className='paras'> 
    <h1 className='text-blue-500 text-3xl'>Hear from students</h1>
    Livewire students talk about their enjoyable learning experiences that included practical training, best practises, job prospects, and exposure to reputable businesses and organisations.
    </div>
    </div> 
    <div className='veid my-2  flex justify-center items-center'>
    <ReactPlayer 
    className="play" 
    playing="true" 
    controls="true"
    url={train}
    loop="true"/>  
    </div>
    

    </div>
  )
}

export default Veido