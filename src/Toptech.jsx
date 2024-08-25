import Topcourses from "./Topcourses" 

const Toptech = () => { 
    let ArtificialIntelligence="ARTIFICIAL INTELLIGENCE"
    let DATASCIENCE="DATA SCIENCE"  
    let MEACHINELEARNING="MEACHINE LEARNING"  
    let PYTHON="PYTHON" 
    let DEEPLEARNING="DEEP LEARNING"  
    let ArtificialIntelligences=" BECOME MASTER IN ARTIFICIAL INTELLIGENCE IN 100 DAYS"
    let NATURALANGUAGEPROCESSING="NATURAL LANGUAGE PROCESSING"
    let DATASCIENCES="BECOME MASTER IN DATA SCIENCE WITHIN 100 DAYS"  
    let MEACHINELEARNINGS="BECOME MASTER IN MEACHINE LEARNING WITHIN 100 DAYS"  
    let PYTHONS="BECOME MASTER IN PYTHON WITHIN 200 DAYS" 
    let DEEPLEARNINGS="BECOME MASTER IN DEEP LEARNING IN 100 DAYS" 
    let NATURALANGUAGEPROCESSINGS="BECOME MASTER IN NATURAL LANGUAGE PROCESSING IN 50 DAYS"

    
  return (
    <div className="lg:flex justify-center items-center my-5 flex-col"> 
    <h1 className="text-blue-500 text-center text-4xl text-blue-500">Top Technologies Offered</h1>  
    <div className="flex flex-col justify-center items-center my-5">    
    <div className="joke "> 
    <Topcourses value="imgs1"  learning={ArtificialIntelligence} update={ArtificialIntelligences} className="rounded m-5"/>  
    <Topcourses value="imgs2"  learning={DATASCIENCE} update={DATASCIENCES} className="rounded m-5"/>
    <Topcourses value="imgs3" learning={MEACHINELEARNING} update={MEACHINELEARNINGS} className="rounded m-5"/>
    </div>
    <div className="joke"> 
    <Topcourses value="imgs4" learning={PYTHON} update={PYTHONS} className="mx-5 rounded"/>  
    <Topcourses value="imgs5" learning={DEEPLEARNING} update={DEEPLEARNINGS}className="mx-5 rounded"/>
    <Topcourses value="imgs6" learning={NATURALANGUAGEPROCESSING} update={NATURALANGUAGEPROCESSINGS} className="mx-5 rounded"/>
    </div>
    
    </div>

    </div>
  )
}

export default Toptech