import { useState,useRef } from "react";
import image from "../assets/graduation.png";
import image1 from "../assets/teacher.png";
import image2 from "../assets/graduate.png";
import AddStudent from "./AddStudent"
import Attendence from "./Attendence"
import Dashboard from "./Dashboard";
import { NavLink,Outlet ,Routes,Route} from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [state, setState] = useState(false);
  
const email=useRef("")
const password=useRef("")
const sid=useRef(0)
const navigate=useNavigate()
const password1=useRef("")
  const student = () => {
    setState(false);
  };
  const teacher = () => {
    setState(true);
  };
  const loginTeacher=()=>{
    axios.post('http://localhost:2022/loginTeacher',{
      "email":email.current.value,
      "password":password.current.value
    }).then((p)=>{
     let {data}=p
    
     if(data){
      navigate(`/dashboard`,{state:{
        data:email.current.value
      }})
     }else{
      document.getElementById('failed').style.visibility=`visible`
     }
 
    },(e)=>{
      console.log(e)
    })

   
  }
 
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-6 mt-5">
            <br></br>
            <br></br>
            <br></br>
            <img style={{ height: `300px`, width: `300px` }} src={image}></img>
            <h3
              className="font mx-3"
              style={{ textShadow: `2px 2px 10px rgb(255, 104, 93)` }}
            >
              Welcome To new Vision
            </h3>
          </div>
          <div className="col-6 mt-5 w-50  ">
            {state ? (
              <>
                <div className="container mx-5">
                  <div className="form-group mt-4 ">
                    <img
                      style={{
                        height: `100px`,
                        width: `100px`,
                        marginLeft: `120px`,
                      }}
                      src={image1}
                    ></img>
                  </div>

                  <div className="form-group mt-2">
                    <label className="form-label">Email</label>
                    <input
                    ref={email}
                      type={"text"}
                      className="form-control  w-75  form-control-sm"
                    ></input>
                  </div>
                  <div className="form-group mt-2">
                    <label className="form-label">Password</label>
                    <input
                    ref={password}
                      type={"password"}
                      className="form-control w-75 form-control-sm"
                    ></input>
                  </div>
                  <p id="failed" style={{color:`red`,visibility:`hidden`}} >invalid details please try again</p>
                  <div className="form-group mt-2">
                    <button
                      className="btn btn-primary mx-3 mt-3"
                      onClick={student}
                    >
                      Login As Student
                    </button>
                    <button className="btn btn-success mx-5 mt-3" onClick={loginTeacher}>Login</button>
                  </div>
                 
                </div>
              </>
            ) : (
              <>
                <div className="container mx-5">
                  <div className="form-group mt-4 ">
                    <img
                      style={{
                        height: `100px`,
                        width: `100px`,
                        marginLeft: `120px`,
                      }}
                      src={image2}
                    ></img>
                  </div>

                  <div className="form-group mt-2">
                    <label className="form-label">Student Id:</label>
                    <input
                    ref={sid}
                      type={"number"}
                      className="form-control  w-75 form-control-sm"
                    ></input>
                  </div>
                  <div className="form-group mt-2">
                    <label className="form-label">Password</label>
                    <input
                    ref={password1}
                      type={"password"}
                      className="form-control  w-75 form-control-sm"
                    ></input>
                   
                  </div>
                 
                  <div className="form-group mt-2">
                    <button
                      className="btn btn-primary mx-3 mt-3"
                      onClick={teacher}
                    >
                      Login As Teacher
                    </button>
                    <button className="btn btn-success mx-5 mt-3">Login</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
    
    </>
  );
};
export default Login;
