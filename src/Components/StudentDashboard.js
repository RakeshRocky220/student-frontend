import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Chart from 'react-apexcharts'
import React from "react";
import axios from "axios";
export default function StudentDashboard() {
    const [obj,setObj]=useState({})
    const location = useLocation();
    const sid = location.state?.sid;
    const options = {
        chart: {
          type: 'bar', // Change the chart type to "bar"
        },
        series: [{
          name: 'Marks',
          data: [0, 0, 0],
        }],
        xaxis: {
          categories: ['MATHS', 'PHYSICS', 'CHEMISTRY'],
        },
      };
      const options1 = {
        chart: {
          type: 'pie',
          height: 400,
        },
        series: [0,0],
        labels: ['Total Marks', 'Remaining Marks'],
        colors: ['#4CAF50', '#ECEFF1'],
      };
      
      const [chartOptions, setChartOptions] = useState(options);
      const [chartOptions1, setChartOptions1] = useState(options1);
      
      useEffect(() => {
        axios.get(`http://localhost:2022/get/${sid}`).then((p) => {
          const { data: d1 } = p;
          let arr = [d1.maths, d1.physics, d1.chemistry];
          let total=arr.reduce((x,y)=>x+y)
          let newOptions = {
            ...options,
            series: [{ data: arr }],
          };
          let newOptions1 = {
            ...options1,
            series: [total,300-total],
          };
          
          setChartOptions(newOptions);
          setChartOptions1(newOptions1)
          setObj(d1);
         
        }, (e) => {
          console.log(e, `1111111111`);
        });
      }, []);
      
      
    return (
        <>
        <br></br>
        <br></br>
        <br></br>

        <div className='container-fluid mt-5'>
    {
        Object.keys(obj) == 0 ? (
            <div className="fa fa-spinner center fa-spin mt-5"></div>
        ) : (
            <div className='row d-flex m-4'>
                <div className='col-md-2 d-flex bg-dark'>
                    <div className="imgage-fluid p-3">
                        <img src={obj.image} style={{height: 100, width: 100, borderRadius: `50px`}}></img>
                    </div>
                </div>
                <div className='col-md-2 d-flex bg-dark'>
                    <h1 style={{fontWeight: `bolder`, fontSize: `115px`}} className="font text my-auto mx-auto text-light">{obj.grade}</h1>
                    <p className="text-success my-auto mx-auto ">Grade</p>
                </div>
                <div className='col-md-2 d-flex bg-dark'>
                    <h3 className="my-auto font text-light mx-auto p-3">{obj.password}</h3>
                </div>
                <div className='col-md-6 d-flex my-auto p-3'>
                    <NavLink to={"/studentdashboard/status/"}>
                        <button className="btn btn-outline-danger my-auto mx-3"> Status</button>
                    </NavLink>
                    <NavLink to={`/studentdashboard/top/${obj.standard}`}>
                        <button className="btn btn-outline-danger my-auto mx-3"> Rankers</button>
                    </NavLink>
                    <NavLink to={"/studentdashboard/logout/"}>
                        <button className="btn btn-outline-danger my-auto mx-3">Logout</button>
                    </NavLink>
                </div>
            </div>
        )
    }
</div>

<div className="row d-flex mt-5">
    <div className="col-md-6 mx-auto">
        {/* Represent Student percentage in the form of pie chart*/}
        {
            Object.keys(obj) == 0 ? (
                <div className="fa fa-spinner fa-spin"></div>
            ) : (
                <div className="mixed-charts">
                    <Chart options={chartOptions1} series={chartOptions1.series} type="pie" width={500} />
                </div>
            )
        }
        {
            Object.keys(obj) == 0 ? (
                <div className="fa fa-spinner fa-spin"></div>
            ) : (
                <div className="mixed-charts">
                    <Chart options={chartOptions} series={chartOptions.series} type="bar" width={500} />
                </div>
            )
        }
    </div>
    <div className="col-md-6 d-flex">
        <Outlet></Outlet>
    </div>
</div>

        </>
    )
}
