
import { Link } from "react-router-dom";

const Courses = ({images, title, description}) => {   
  
        let text =title?title.toLowerCase():"";
   console.log(text)
    
    return (
        <div className="holder lg:mx-5 flex justify-center items-center rounded">
            <img src={images} alt={images}  className="rounded"/>
            <h2 className="text-lg font-bold">Course Title</h2>
            <h2>{title}</h2>
            <p>{description}</p>  
            <Link to={`/${text}`} className="more rounded">Learn More</Link>
        </div>
    );
}

export default Courses;
