import axios from "axios"
import { useEffect } from "react"
import { useRef ,useState} from "react"
import { useParams } from "react-router-dom"
const AddStudent=()=>{
    const {var1}=useParams()
    
    const [teacher,setTeacher]=useState({})
    const sid=useRef()
    const sname=useRef()
    const password=useRef()
    const mobno=useRef()
    const gender=useRef()
    const DateOfBirth=useRef()
    const standard=useRef()
    const fee=useRef()
    const maths=useRef()
    const physics=useRef()
    const chemistry=useRef()
    const [image,setImage]=useState("")
    const [student,setStudent]=useState({})
    const [flag,setFlag]=useState(false)




    const imageChange=(event)=>{
        const file= event.target.files[0]
        const reader=new FileReader()
        reader.readAsDataURL(file);
        reader.onload=()=>{
         setImage(reader.result)
     }
     }
    
useEffect(
  
    ()=>{
        
        console.log(var1,`----------`)
        axios.get(`http://localhost:2022/getTeacherBy/${var1}`).then((p)=>{
            console.log(p,`useeffect`)
const {data:d1}=p
setTeacher(d1)
        },(e)=>{
            console.log(e)
        })
    },[]
)

    const registerStudent=()=>{
       
        setFlag(true)
        axios.post(`http://localhost:2022/saveStudent`,
        {
            "student":{
                "sid":sid.current.value,
                "sname":sname.current.value,
                "password":password.current.value,
                "mobno":mobno.current.value,
                "gender":gender.current.value,
                "dob":DateOfBirth.current.value,
                "standard":standard.current.value,
                "fee":fee.current.value,
                "image":image,
                "maths":maths.current.value,
                "physics":physics.current.value,
                "chemistry":chemistry.current.value
            },
            "teacher":teacher
        }
        ).then((pos)=>{
           
          
            console.log(pos,`studentObject`)
        const {data}=pos
        setStudent(data)
      document.getElementById(`suc`).style.visibility=`visible`
        
        },(e)=>{
            console.log(e,`errror`)
        })
        setTimeout(()=>{
            document.getElementById(`suc`).style.visibility=`hidden`
            
        },5000)
       
    }

return(
<>
<div className="container-fluid ">
  <div
    style={{
      background: `linear-gradient(45deg,rgb(255, 209, 207),rgb(255, 209, 207))`,
      paddingBottom: `10px`,
      width: `95%`,
    }}
    className="row rounded 30px mx-4 p-3"
  >
    <div style={{ width: `100%` }} className="row">
      <div className="col-md-5 mx-auto">
        <h1 className="font text-center gradient1 mt-2">
          <i
            style={{ color: `black` }}
            className="fa fa-user-plus mt-2"
            aria-hidden="true"
          ></i>
          Add Student
        </h1>
      </div>
    </div>
    <hr></hr>
    <div className="row p-1">
      <div className="col-md-6">
        <div className="form-group mt-2">
          <input
            type={"number"}
            ref={sid}
            placeholder="Enter Student Id"
            className="w-100 form-control form-control-sm"
          ></input>
        </div>
        <div className="form-group mt-2">
          <input
            type={"text"}
            ref={sname}
            placeholder="Enter Student Name"
            className="w-100 form-control form-control-sm"
          ></input>
        </div>
        <div className="form-group mt-2">
          <input
            type={"password"}
            ref={password}
            placeholder="Enter Password "
            className="w-100 form-control form-control-sm"
          ></input>
        </div>
        <div className="form-group mt-2">
          <input
            type={"number"}
            ref={mobno}
            placeholder="Enter Parent Mobile"
            className="w-100 form-control form-control-sm"
          ></input>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="radio-group">Gender</label>&emsp;
          <div className="form-check-inline">
            <input
              className="form-check-input"
              ref={gender}
              type="radio"
              name="radio-group"
              id="radio-option1"
              value="Male"
            />
            <label className="form-check-label" htmlFor="radio-option1">
              Male
            </label>
          </div>
          <div className="form-check-inline">
            <input
              className="form-check-input"
              ref={gender}
              type="radio"
              name="radio-group"
              id="radio-option2"
              value="Female"
            />
            <label className="form-check-label" htmlFor="radio-option2">
              Female
            </label>
          </div>
        </div>
        <div className="form-group mt-2">
          <input
            type={"date"}
            ref={DateOfBirth}
            className="w-100 form-control form-control-sm"
            placeholder="Enter "
          ></input>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group mt-2">
          <select className="form-select w-100 form-select-sm" ref={standard}>
            <option value="">--Select a Standard--</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
            <option value="9th">9th</option>
            <option value="10th">10th</option>
          </select>
        </div> 
        <div className="form-group mt-2">
            <input type={"number"} ref={fee} className="w-100 form-control form-control-sm" placeholder="Enter fees" ></input>
        </div>
        <div className="form-group mt-2">
            <input type={"file"} onChange={imageChange}   className="w-100 form-control form-control-sm" ></input>
        </div>
        <div className="form-group mt-2">
            <input type={"number"} ref={maths} className="w-100 form-control form-control-sm" placeholder="Enter Marks in Maths" ></input>
        </div>
        <div className="form-group mt-2">
            <input type={"number"} ref={physics} className="w-100 form-control form-control-sm" placeholder="Enter Marks in Physics" ></input>
        </div>
        <div className="form-group mt-2">
            <input type={"number"} ref={chemistry} className="w-100 form-control form-control-sm" placeholder="Enter Marks in chemistry" ></input>
        </div>
        <div  className="form-group mt-3 ">
        <button className="btn btn-danger">Reset</button>
           <button className="btn btn-success" onClick={registerStudent}>Register</button>
        </div>
        <div className="form-group">
          <p id="suc" className="text-success" style={{visibility:`hidden`}}>Registration successful</p>
        </div>
  </div>
</div>


    </div>



    
</div>



</>)
}
export default AddStudent