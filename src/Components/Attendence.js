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
        <div className="row mt-3">
           <div className="col-4 mx-5 mt-2">
            <h3 className="font"><i class="fa fa-calendar-o" aria-hidden="true"></i>&nbsp;date:{`${year}-${month + 1}-${day}`}</h3>
            </div>     
        </div>
        <div className="row mx-5 p-4" style={{background:`linear-gradient(45deg,rgb(243, 142, 137),rgb(255, 209, 207))`,paddingBottom:`10px`,width:`95%`}}>
                {
                    res.map((e,i)=>{
                        return(
                            <>
                           
                            <div className="col-2" >
                                <input type="checkbox" onClick={turn} value={e.sid} style={{display:`block`}} ></input>
                                <img id={e.sid}  src={e.image} style={{height:`100px`,width:`100px`,borderRadius:`50px`}}></img>
                                <span className="mx-3 text text-success" style={{display:`block`,visibility:`hidden`}}><i class="fa fa-check-circle" aria-hidden="true"></i>Present</span>
                            </div>
                           
                            </>
                        )
                    })
                }
                <div className="row mt-3">
        <div className="col-2 ">
        <button className="btn btn-primary" onClick={funcone}>Submit </button>                                                   
               </div>
               <div className="col-2 text-success">
               <span id="sms" style={{visibility:`hidden`}}><i class="fa fa-check-circle" aria-hidden="true"></i>&nbsp;Sent Successfully </span>
               </div>
       
        </div>  
               
        </div>
        
    </div>
    </>
)
}
export default Attendence