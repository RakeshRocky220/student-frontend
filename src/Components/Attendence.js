import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
const Attendence=()=>{
    const p=useParams()
    const [res,setRes]=useState([])
    const [arr,setArr]=useState([])
    const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
console.log();

const funcone=()=>{
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const values = [];
    
    checkboxes.forEach((checkbox) => {
      values.push(checkbox.value);
    });
    
  axios.post('http://localhost:2022/send-sms',{
    "list":[...values]
  }).then((pos)=>{
console.log(pos)
  },(neg)=>{
console.log(neg)
  })
  document.getElementById('sms').style.visibility=`visible`  
  
}
const turn=()=>{

}

    useEffect(()=>{
       
        document.getElementById(`romantic`).style.display=`none`
        axios.get(`http://localhost:2022/getbystand/${p.var1}`).then((pos)=>{
           
    const {data}=pos
    setRes(data)
        },(err)=>{
    console.log()
        })
    },[])
    
return(
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto mt-2">
            <h3 className="font">
              <i className="fa fa-calendar-o" aria-hidden="true"></i>&nbsp;date:{`${year}-${month + 1}-${day}`}
            </h3>
          </div>
        </div>
        <div className="row mx-auto p-4" style={{ background: 'linear-gradient(45deg,rgb(243, 142, 137),rgb(255, 209, 207))', paddingBottom: '10px', width: '95%' }}>
          {res.map((e) => (
            <div className="col-6 col-md-3">
              <div className="card mb-3">
                <div className="card-body text-center">
                  <input type="checkbox" onClick={turn} value={e.sid} className="form-check-input" />
                  <img id={e.sid} src={e.image} className="card-img-top mx-auto mt-3" style={{ height: '80px', width: '80px', borderRadius: '50px' }} alt="User" />
                  <span className="mx-3 text text-success" style={{ visibility: 'hidden' }}>
                    <i className="fa fa-check-circle" aria-hidden="true"></i>Present
                  </span>
                </div>
              </div>
            </div>
            
          ))}
         
          
        </div>
        <div className="col-md-4 mx-auto mt-3 text-center">
            <button className="btn btn-primary mx-5" onClick={funcone}>
              Submit
            </button>
            <span id="sms" className="mx-3 text-success" style={{ visibility: 'hidden' }}>
              <i className="fa fa-check-circle" aria-hidden="true"></i>&nbsp;Sent Successfully
            </span>
          </div>
      </div>
    </>
)
}
export default Attendence