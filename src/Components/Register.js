import { useRef,useState } from "react"
import axios from 'axios'
const Register=()=>{
    const tid=useRef(0);
    const tname=useRef("");
    const password=useRef("");
    const mobno=useRef(0);
    const gender=useRef("");
    const email=useRef("");
    const dob=useRef("")
    const head=useRef("")
    const salary=useRef(0)
    const [image,setImage]=useState("")
    const [obj,setObj]=useState({})
    const [bool,setBool]=useState(true)
    const register=()=>{
       axios.post('http://localhost:2022/saveTeacher',{
        "tid":tid.current.value,
        "tname":tname.current.value,
        "password":password.current.value,
        "mobno":mobno.current.value,
        "gender":gender.current.value,
        "email":email.current.value,
        "dob":dob.current.value,
        "headToStandard":head.current.value,
        "image":image,
        "salary":salary.current.value
       }).then((p)=>{
        document.getElementById('alert').style.visibility=`visible`
        setBool(false)
        let {data}=p
        setObj(data)
       },(e)=>{
        console.log(e)
       })
    }
    const imageChange=(event)=>{
       const file= event.target.files[0]
       const reader=new FileReader()
       reader.readAsDataURL(file);
       reader.onload=()=>{
        setImage(reader.result)
    }
    }
    return (
        <>
{
Object.keys(obj)==0?(<div id="alert" style={{visibility:`hidden`,color:`black`,position:`relative`,top:`10px`,left:`50%`,fontSize:`25px`}} className="fa fa-spinner fa-spin"></div>):(<div className='alert alert-success alert-dismissible mt-2 mx-3' style={{width:`1200px`}} role="alert"><i style={{height:30,width:30}} class="fa fa-check-circle" aria-hidden="true"></i>Student Registration successful<button type={"button"} className='btn-close' data-bs-dismiss="alert" aria-label="Close"></button></div>)
}
        
        <div className="container">
        <center><h3 className="font mt-5">Teacher Register Here</h3></center>
       <div className="row">
       <div className="col-6 font">
       <div className="form-group mt-2">
            <label className="form-label">Teacher Id</label>
            <input type={"number"} ref={tid} className="form-control form-control-sm  "></input>
        </div>
        <div className="form-group mt-2">
            <label className="form-label">TeacherName</label>
            <input type={"text"} ref={tname} className="form-control form-control-sm   "></input>
        </div>
        <div className="form-group mt-2">
            <label className="form-label">Password</label>
            <input type={"password"} ref={password} className="form-control form-control-sm "></input>
        </div>
        <div className="form-group mt-2">
            <label className="form-label">Mobno</label>
            <input type={"number"} ref={mobno} className="form-control form-control-sm "></input>
        </div>
        <div className="form-group mt-3">
      
  <label htmlFor="radio-group">Gender</label>&emsp;
  <div className="form-check-inline">
    <input className="form-check-input" ref={gender} type="radio" name="radio-group" id="radio-option1" value="Male"/>
    <label className="form-check-label" htmlFor="radio-option1">
      Male
    </label>
  </div>
  <div className="form-check-inline">
    <input className="form-check-input"  ref={gender} type="radio" name="radio-group" id="radio-option2" value="Female"/>
    <label className="form-check-label" htmlFor="radio-option2">
        Female
    </label>
  </div>
        </div>
       </div>
       <div  className="col-6 mt-2 font">
        <div className="form-group ">
            <label className="form-label">Email</label>
            <input type={"email"} ref={email} className="form-control form-control-sm"></input>
        </div>
        <div className="form-group mt-2">
            <label className="form-label">DateOfBirth</label>
            <input type={"datetime-local"} ref={dob} className="form-control form-control-sm"></input>
        </div>
        <div className="form-group mt-2">
            <label className="form-label">HeadToStandard</label>
            <input type={"text"} ref={head} className="form-control form-control-sm"></input>
        </div>
        <div className="form-group mt-2">
            <label className="form-label">Salary</label>
            <input type={"number"} ref={salary} className="form-control form-control-sm"></input>
        </div>
        <div className="form-group mt-2">
            <label className="form-label">Image</label>
            <input type={"file"} onChange={imageChange} placeholder={"upload Image"} className="form-control form-control-sm"></input>
        </div>
       </div>
       <div id='btn1' className="form-group">
<button  className="btn btn-success" id="btn" onClick={register}>Register</button>
<button className="btn btn-danger mx-5">Clear</button>
       </div>

       </div>
       </div>
        </>
    )
}
export default Register