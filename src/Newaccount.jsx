import { useNavigate } from "react-router-dom";
import { useRef, useState} from "react";

const Newaccount = ({ value }) => {
  const { val, setval, changeone, changes, changtwo, changetwos, changethree, changethrees,saves} = value; 
 
  const [get, setGet] = useState(false);
  const navi = useNavigate();
  let feeder = useRef(""); // Initialize the ref properly with null

  const Feeds = () => {
    const id = val.length ? val[val.length - 1].id + 1 : 1;
    const username = changeone;
    const password = changtwo;
    const email = changethree;
    
    if (username === "" || password === "" || email === "") {
      return;
    }
    
    if (!email.includes("@gmail.com")) {
      return;
    }

    const newArr = [...val, { id, username, password, email }];
    setval(newArr); 
     saves(username)
    setGet(true);   
    changethrees('')

   navi("/")
  }

  return (
    <div className="newaccount flex justify-center items-center ">
      <div className="filling rounded">
        <h2 className="text-2xl font-bold text-center text-green-500">
          Create New Account
        </h2>

        <div className="deatils flex justify-center items-center my-5">
          <input
            type="text"
            className="Name w-full h-10 pl-2 text-black"
            placeholder="username"
            onChange={(e) => changes(e.target.value)}
          />
          <input
            type="password"
            className="Name w-full h-10 pl-2 text-black"
            placeholder="Password"
            onChange={(e) => changetwos(e.target.value)}
          />
          <input
            type="email"
            className="Name w-full h-10 pl-2 text-black"
            placeholder="email"
            onChange={(e) => changethrees(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-blue-500 p-3 rounded hover:bg-white hover:text-blue-500"
            onClick={Feeds}
          >
            signup
          </button>
        </div>
        {get && (
          <p className="finalmessage text-center my-2 p-3 bg-green-500 flex justify-center items-center rounded" ref={feeder}></p>
        )}
      </div>
    </div>
  );
};

export default Newaccount;
