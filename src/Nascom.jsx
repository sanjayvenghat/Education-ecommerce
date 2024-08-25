import on2 from './images/on2.jpg' 
import on3 from './images/on3.jpg' 
import on4 from './images/on4.jpg'   
import Courses from './Courses' 
import on1 from './images/on1.png'

const Nascom = () => {  
    let javat="Design" 
    let kotlint="BlockChain" 
    let phpt="ArtificalIntelligence"  
    let softt="Industry 4.0"
    let javad="get 50 hours of course with the online training and master in Design" 
    let kptlind="80 120 hours of course with the online training and master in Blockchain" 
    let phpd="get 20 hours of course with the online training and master in ArtificialIntelligence" 
    let softd="get 10 hours of course with the online training and master in Industry 4.0"

  return (
    <div className="trendingCourses my-5 ">  
    <div className="flex justify-center items-cennter">
    <h1 className="trends text-4xl font-bold text-center text-blue-500">Latest Courses</h1> 
    </div>
   
    <div className="trendingimg lg:flex justify-center items-center my-5">
    <Courses images={on1}
     title={javat} 
     description={javad} className="holder hole" 
     />  
    <Courses images={on2} 
     title={kotlint} 
     description={kptlind}  
     className="holder hole"
     /> 
    <Courses images={on3} 
    title={phpt}
     description={phpd}  
     className="holder hole"
     /> 
     <Courses images={on4} 
     title={softt}
      description={softd}  
      className="holder hole"
      />
    </div> 
   
    

    </div>
  )
}

export default Nascom