import Courses from "./Courses"  
import java from './images/java.jpg' 
import kotlin from './images/kotlin.jpg'  
import php from './images/php.jpg' 
import software from './images/software.jpg'
const Trendingcourses = () => { 
    let javat="Java" 
    let kotlint="Kotlin" 
    let phpt="Php"  
    let softt="webdevelopment"
    let javad="get 120 hours of course with the online training and master in java" 
    let kptlind="get 120 hours of course with the online training and master in kotlin" 
    let phpd="get 120 hours of course with the online training and master in php" 
    let softd="get 120 hours of course with the online training and master in webdevelopment"
  return (
    <div className="trendingCourses">  
    <div className="flex justify-center items-cennter">
    <h1 className="trend text-4xl font-bold text-center text-blue-500">Trending Courses</h1> 
    </div>
   
    <div className="trendingimg lg:flex justify-center items-center my-5">
    <Courses images={java}
     title={javat} 
     description={javad} className="holder" 
     />  
    <Courses images={kotlin} 
     title={kotlint} 
     description={kptlind}  
     className="holder"
     /> 
    <Courses images={php} 
    title={phpt}
     description={phpd}  
     className="holder"
     /> 
     <Courses images={software} 
     title={softt}
      description={softd}  
      className="holder"
      />
    </div> 
   
    

    </div>
  )
}

export default Trendingcourses