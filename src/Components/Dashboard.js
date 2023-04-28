import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import image2 from "../assets/graduation.png";
const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data;
  const [obj, setObj] = useState({});
  const [b, setB] = useState(true);
  
  const logout = () => {
    navigate(`/logout`);
  };
  const transfer = () => {
    setB(false);
    setTimeout(() => {
    document.getElementById('tar').style.visibility=`hidden`;
      navigate(`/dashboard/addstudent/${obj.email}`);

    }, 2000);
  };

  useEffect(() => {
    axios.get(`http://localhost:2022/getTeacherBy/${data}`).then(
      (p) => {
        console.log(p);
        const { data } = p;
        setObj(data);
      },
      (e) => {
        console.log(e);
      }
    );
  }, []);

  return (
   

<>
  <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-lg-12 mt-5">
        <div style={{top:`15vh`,backgroundColor:`rgb(255, 209, 207)`}} className="row mt-2 mx-1 rounded-30 fixed-top 200px">
          <div className="col-12 col-md-1 p-3 d-flex justify-content-center">
            <img
              src={obj.image}
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              alt="User profile"
            />
          </div>
          <div className="col-12 col-md-2 mt-4 d-flex justify-content-center">
            <h5 className="font">Hi! {obj.tname}</h5>
          </div>
          <div className="col-12 col-md-3 mt-4">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm form-control-inline"
                placeholder="Search Student"
              />
            </div>
          </div>
          <div className="col-12 col-md-1 mt-4 d-flex justify-content-center">
            <button className="btn btn-primary btn-sm">Search</button>
          </div>
          <div className="col-12 col-md-5 mt-4 d-flex justify-content-end">
            <NavLink to={`/dashboard/addstudent/${obj.email}`}>
              <button className="btn btn-dark btn-sm mx-2">
                Add Stud
              </button>
            </NavLink>
            <NavLink to={`/dashboard/attendence/${obj.headToStandard}`}>
              <button className="btn btn-dark btn-sm mx-2">
                Attendance
              </button>
            </NavLink>
            <NavLink to={`/dashboard/students/${obj.headToStandard}`}>
              <button className="btn btn-dark btn-sm mx-2">Students</button>
            </NavLink>
            <NavLink>
              <button
                className="btn btn-dark btn-sm mx-2"
                onClick={logout}
              >
                Logout
              </button>
            </NavLink>
          </div>
        </div>
        <div  className="row mt-5">
          <div
            className="col-12 d-flex justify-content-center align-items-center"
            id="romantic"
          >
            {b ? (
              <div className="text-center">
                <h1 className="font fw-bold">Click To Start</h1>{" "}
                <i
                  onClick={transfer}
                  className="fa fa-arrow-circle-right mx-3"
                  style={{ fontSize: "20px" }}
                  aria-hidden="true"
                ></i>
              </div>
            ) :  (
              <div className="text-center">
                <div
                id="tar"
                  className="fa fa-spinner fa-spin mt-2"
                  style={{ fontSize: "10px", color: "black" }}
                ></div>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  </div>
</>


  );
};
export default Dashboard;
