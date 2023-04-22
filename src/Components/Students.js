import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import $ from 'jquery'
import jQuery from 'jquery';
import { Dropdown, DropdownButton } from 'react-bootstrap';
const Student=()=>{
    const p=useParams()
    const [res,setRes]=useState([])
    const [id,setId]=useState(0)
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [fee,setFee]=useState(0.0)
    const [maths,setMaths]=useState(0)
    const [physics,setPhysics]=useState(0)
    const [chemistry,setChemistry]=useState(0)
    const [mobno,setMobno]=useState(0)
    const [standard,setStandard]=useState("")


    const func1=(p1)=>{
      const t1 = res.filter(i => i.sid == p1)
      const t2 = t1[0]
      const { sid, sname, password, fee,maths,physics,chemistry,mobno,standard } = t2
      setId(sid)
      setFee(fee)
      setChemistry(chemistry)
      setPassword(password)
      setMaths(maths)
      setMobno(mobno)
      setPhysics(physics)
      setStandard(standard)
      setName(sname)
      jQuery(()=> {
        jQuery('#myModal').modal('show');
      });
      
     
    }


    const update = (p) => {
      axios.put(`http://localhost:2022/update/${p}`, {
        "sid": p,
        "sname": name,
        "fee": fee,
        "password": password,
        "mobno":mobno,
        "maths": maths,
        "physics": physics,
        "chemistry": chemistry,
        "standard":standard
      }).then((p) => {
        const { data } = p
        res.map((e, i) => {
          if (e.sid == data.sid) {
            res[i] = data
            setRes(res)
            anonymous()
          }
        })
      }, (event) => {
        console.log(event)
      })
    }



    const func2=(p2)=>{

    }








    const getpercentage=()=>{
        axios.get(`http://localhost:2022/getbypercentage/${p.var1}`).then((p)=>{
          const {data}=p
          setRes(data)
        },(e)=>{
          console.log(e)
        })
      }
  
      const getMaths=()=>{
        axios.get(`http://localhost:2022/getbymaths/${p.var1}`).then((p)=>{
          const {data}=p
          setRes(data)
        },(e)=>{
          console.log(e)
        })
      }
  
      const getPhysics=()=>{
        axios.get(`http://localhost:2022/getbyphysics/${p.var1}`).then((p)=>{
          const {data}=p
          setRes(data)
        },(e)=>{
          console.log(e)
        })
      }
  
      const getChemistry=()=>{
        axios.get(`http://localhost:2022/getbychemistry/${p.var1}`).then((p)=>{
          const {data}=p
          setRes(data)
        },(e)=>{
          console.log(e)
        })
      }

const  anonymous=()=>{
  axios.get(`http://localhost:2022/getbystand/${p.var1}`).then((pos)=>{
       
  const {data}=pos
  setRes(data)
      },(err)=>{
  console.log()
      })
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

return (
    <>

    <div className="container m-3" style={{overflowX: 'auto', maxHeight: `400px`}}>
    <div className="row">
                <div className="col-2">
                  
                        <DropdownButton  title="Sort">
                          <Dropdown.Item onClick={getpercentage} >Percentage</Dropdown.Item>
                          <Dropdown.Item onClick={getMaths} >Maths</Dropdown.Item>
                          <Dropdown.Item onClick={getPhysics}>Physics</Dropdown.Item>
                          <Dropdown.Item onClick={getChemistry}>Chemistry</Dropdown.Item>
                       </DropdownButton>
                       
                </div>
                <div className="col-2">
                <i oncl class="fa fa-refresh" onClick={anonymous} style={{fontSize:`39px`}} aria-hidden="true"></i>
                </div>
                <div className="col-10"></div>
                <div className="col-2">
                
                </div>
            </div>
        <div style={{background:`linear-gradient(45deg,rgb(243, 142, 137),rgb(255, 209, 207))`,paddingBottom:`10px`,width:`95%`}} className="p-3 row rounded 30px mx-1  mt-2">
           
            <div className="row mt-2"><div className="col-auto">
            {
                res.length==0?(<div style={{fontSize:`40px`,position:`absolute`,top:`50%`,left:`40%`,transform:`translate(-50%,-50%)`}} className="fa fa-spinner fa-spin"></div>):(<table className="table table-sm  30px table-light table-bordered table-striped table-hover">
                    <thead className="bg-dark text-dark" style={{position:`sticky`,top:0}}>
                        <tr>
                        <th>sid</th>
                        <th>sname</th>
                        <th>gender</th>
                        <th>standard</th>
                        <th>dob</th>
                        <th>mobno</th>
                        <th>fee</th>
                        <th>maths</th>
                        <th>physics</th>
                        <th>chemistry</th>
                        <th>total</th>
                        <th>grade</th>
                        <th>percentage</th>
                        <th>edit</th>
                        <th>delete</th>
                        <th>image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            res.map((e,i)=>{
                                return(
                                    <tr className="text-center text-middle">
                                        <td>{e.sid}</td>
                                        <td>{e.sname}</td>
                                        <td>{e.gender}</td>
                                        <td>{e.standard}</td>
                                        <td>{e.dob}</td>
                                        <td>{e.mobno}</td>
                                        <td>{e.fee}</td>
                                        <td>{e.maths}</td>
                                        <td>{e.physics}</td>
                                        <td>{e.chemistry}</td>
                                        <td>{e.total}</td>
                                        <td>{e.grade}</td>
                                        <td>{e.percentage}</td>
                                        
                                        
                                        <td className="text text-success"><i  data-bs-toggle={"modal"} data-bs-target={"#myModal"} onClick={() => func1(e.sid)}  className="fa fa-edit"></i></td>
                                        <td><i className="fa fa-trash text text-danger" onClick={() => func2(e.sid)} ></i></td>
                                        <td><img style={{height:`60px`,width:`50px`}} src={e.image}></img></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>)
            }
            </div></div>
        </div>
    </div>













    <div  className="modal fade" id="myModal" tabIndex={"-1"}  >
        <div className="modal-dialog">
          <div style={{backgroundColor:`white`,boxShadow:`2px 2px 10px 3px white`}}  className="modal-content">
            <div className="modal-header text text-light bg-black">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Update Student Here</h1>
              <button type={"button"} className="btn-close" data-bs-dismiss="modal" aria-label={"Close"}></button>
            </div>
            <div style={{backgroundColor:`rgb(187, 227, 236)`}} className="modal-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type={"text"} value={name} className="form-control" onChange={(event) => setName(event.target.value)} placeholder="Enter student Name"></input>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Course</label>
                    <input type={"text"} value={standard} className="form-control" onChange={(event) => setStandard(event.target.value)} placeholder="Enter student standard"></input>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Physics</label>
                    <input type={"number"} value={maths} className="form-control" onChange={(event) => setMaths(event.target.value)} placeholder="Enter Maths Marks"></input>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Physics</label>
                    <input type={"number"} value={mobno} className="form-control" onChange={(event) => setMobno(event.target.value)} placeholder="Enter Maths Marks"></input>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="form-label">Fee</label>
                    <input type={"number"} value={fee} onChange={(event) => setFee(event.target.value)} className="form-control" placeholder="Enter student fee"></input>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Maths</label>
                    <input type={"number"} value={physics} onChange={(event) => setPhysics(event.target.value)} className="form-control" placeholder="Enter Physics Marks"></input>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Chemistry</label>
                    <input type={"number"} value={chemistry} onChange={(event) => setChemistry(event.target.value)} className="form-control" placeholder="Enter Chemistry Marks"></input>
                  </div>
                </div>
              </div>.
            </div>
            <div  style={{backgroundColor:`rgb(187, 227, 236)`}} className="modal-footer">
              <button type={"button"} className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              <button id="update" type={"button"} onClick={() => update(id)} data-bs-dismiss={"modal"} className="btn btn-success">Save changes</button>
            </div>
          </div>
        </div>
      </div> 
        




    </>
)
}
export default Student