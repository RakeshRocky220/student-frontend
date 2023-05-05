import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Top() {
    const {var1}=useParams();
    var x=0;
    const [students,setStudents]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:2022/getAllByStandard/${var1}`).then((p)=>{
            console.log(p)
const {data}=p
data.sort((a,b)=>b.total-a.total)
setStudents(data)
        },(e)=>{
            console.log(e)
        })
    },[])
  return (
   <>
   <div className='container-fluid'>
    <table className='table table-light table-hovered table-striped rounded 20px'>
        <thead>
            <tr>
                <th>Rank</th>
                <th>Image</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {
                students.map((e,i)=>{
                    x=x+1
                    return(
                        <tr className='text-center align-middle'>
                            <td>{x}</td>
                            <td><img src={e.image} style={{borderRadius:`50px`,height:`80px`,width:`80px`}}></img></td>
                            <td>{e.sname}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
   </div>
   </>
  )
}
