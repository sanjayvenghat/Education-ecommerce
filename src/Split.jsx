
const Split = ({val,second,Changer,changer2}) => { 
      
   
  return (
    <div className="flex justify-evenly items-center">   
    <h3
     className={val===true?"general":"nothing"}
    onClick={()=>Changer()}>Email</h3> 
    <h3 className={second===true?"general":"nothing"}
    onClick={()=>changer2()}>Mobile</h3>
    </div>
  )
}

export default Split