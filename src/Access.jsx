
import { Link } from "react-router-dom"
const Access = () => {
  return ( 
    <div className="login-user flex justify-evenly items-center"> 
    <p className="text-green-500"><Link to={"/newaccount"}>create a account</Link></p> 
    <p className="text-red-500"><Link>Forget Password?</Link></p>
    </div>
  
  )
}

export default Access