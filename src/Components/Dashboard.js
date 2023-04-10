import axios from "axios"
import { useEffect,useState } from "react"
import {  useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { NavLink,Outlet } from "react-router-dom"
import image2 from "../assets/graduation.png";
const Dashboard=()=>{
    const location = useLocation();
    const navigate=useNavigate()
    const data = location.state?.data;
    const [obj,setObj]=useState({})
    const [b,setB]=useState(true)
    const logout=()=>{
        navigate(`/logout`)
    }
const transfer=()=>{
    setB(false)
    setTimeout(()=>{
        navigate(`/dashboard/addstudent/${obj.email}`)
    },2000)
}

    useEffect(
       
       ()=>{
    
        axios.get(`http://localhost:2022/getTeacherBy/${data}`).then((p)=>{
            console.log(p)
            const {data}=p
            setObj(data)
           
            },(e)=>{
                console.log(e)
            })
       },[]
    )

return(
    <>
    <div className="row">
       
        <div className="col-12">
            
             <div style={{background:`linear-gradient(45deg,rgb(243, 142, 137),rgb(255, 209, 207))`,boxShadow:`inset 1px 1px 10px 1px black`,width:`100%`}} className="row mt-2 mx-1 rounded 30px">
                 <div className="col-1 p-3">
                        <img src={obj.image} style={{height:`40px`,width:`40px`,borderRadius:`50px`}}></img>
                  </div>
                 <div className="col-2 mt-4">
                        <h5
                        
                        className="font">Hi! {obj.tname}</h5>
                </div>
                 <div className="col-2 mt-4">
                     <div className="form-group">
                          <input type={"text"} className="form-control form-control-sm form-control-inline" placeholder="Search Student"></input>
                     </div>
                  </div>
            <div className="col-1 mt-4">
                    <button className="btn btn-primary btn-sm">Search</button>
            </div>
            <div className="col-6">
                <div className="mt-4">
               
                    <NavLink to={`/dashboard/addstudent/${obj.email}`}><button className="btn btn-dark btn-sm mx-3">AddStudent</button></NavLink>
                    <NavLink to={`/dashboard/attendence/${obj.headToStandard}`}><button className="btn btn-dark btn-sm mx-3">Attendence</button></NavLink>
                    <NavLink to={`/dashboard/students/${obj.headToStandard}`}><button className="btn btn-dark btn-sm mx-3">Students</button></NavLink>
                    <NavLink ><button className="btn btn-dark btn-sm mx-3 " onClick={logout}>Logout</button></NavLink>
                   
                </div>
            </div>
        </div>
       <div className="row">
       <div  style={{position:`absolute`,top:`240px`,left:`500px`}} id="romantic">
        {
            b?(<div  >
              <h1 className="font" style={{fontWeight:`bolder`}}> Click To Start</h1> <i onClick={transfer} className="fa fa-arrow-circle-right mx-3" style={{fontSize:`220px`}} aria-hidden="true"></i>
            </div>):(<div>
                <div className="fa fa-spinner fa-spin mt-2" style={{fontSize:`220px`,color:`black`}}></div>
            </div>)
        }
       </div>
       <Outlet ></Outlet>
       </div>
        </div>
    </div>
   
    
    </>
)
}
export default Dashboard