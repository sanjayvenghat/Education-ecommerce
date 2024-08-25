
const Counts = () => { 
    


  return (
    <div className="counters lg:flex justify-between items-center" style={{
        width: "80%",
    }}> 
   
    <div className="placedstudentscount" >  
    <h1 className="text-3xl text-pink-600 mx-2">Branches</h1> 
    <h2 className="text-3xl text-pink-600 mx-2">50+</h2>
    </div> 
    <div className="placedstudentscount" >  
    <h1 className="text-3xl text-pink-600 mx-2">Domains</h1> 
    <h2 className="text-3xl text-pink-600 mx-2">50+</h2>
    </div>
    <div className="placedstudentscount" >  
    <h1 className="text-3xl text-pink-600 mx-2">college</h1> 
    <h2 className="text-3xl text-pink-600 mx-2">1000+</h2>
    </div>

    </div>
  )
}

export default Counts