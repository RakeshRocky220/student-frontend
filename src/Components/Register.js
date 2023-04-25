import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import stud from '../assets/stud.jpg'
const Register = () => {

  const navigate = useNavigate()
  const tid = useRef(0);
  const tname = useRef("");
  const password = useRef("");
  const mobno = useRef(0);
  const gender = useRef("");
  const email = useRef("");
  const dob = useRef("");
  const head = useRef("");
  const salary = useRef(0);
  const [image, setImage] = useState("");
  const [obj, setObj] = useState({});
  const [bool, setBool] = useState(true);
  const register = () => {
    axios.post("http://localhost:2022/saveTeacher", {
        tid: tid.current.value,
        tname: tname.current.value,
        password: password.current.value,
        mobno: mobno.current.value,
        gender: gender.current.value,
        email: email.current.value,
        dob: dob.current.value,
        headToStandard: head.current.value,
        image: image,
        salary: salary.current.value,
      })
      .then(
        (p) => {
          document.getElementById("alert").style.visibility = `visible`;
          setBool(false);
          let { data } = p;
          setObj(data);
          console.log(Object.keys(data)!=0)
          if(Object.keys(data)!=0){
            document.getElementById('ale').style.display=`inline-block`
          }
          setTimeout(()=>{
            document.getElementById('ale').style.display=`none`
          },3000)
        },
        (e) => {
          console.log(e);
        }
      );
  };
  const imageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const goto = () => {
    navigate("/login")
  }
  return (
    <>
    {Object.keys(obj) == 0 ? (
    <div
      id="alert"
      style={{
        visibility: `hidden`,
        color: `black`,
        position: `relative`,
        top: `10px`,
        left: `50%`,
        fontSize: `25px`,
      }}
      className="fa fa-spinner fa-spin"
    ></div>
  ) : (
    <div
      className="alert alert-success alert-dismissible mt-2 mx-auto"
      style={{ maxWidth: `1200px` }}
      role="alert"
    >
      <i
        style={{ height: 30, width: 30 }}
        class="fa fa-check-circle"
        aria-hidden="true"
      ></i>
      Student Registration successful
      <button
        type={"button"}
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  )}
<div className="container">
  
  <div className="row m-3">
    <div className="col-md-6 mt-5 font">
      <img
        className="mt-5 img-fluid mx-auto d-block"
        style={{
          borderRadius: 30,
          height: `auto`,
          width: `100%`,
          maxWidth: `440px`,
        }}
        src={stud}
        alt="student"
      ></img>
      <button
        className="btn btn-success mt-3 mx-auto d-block"
        onClick={goto}
      >
        Sign in
      </button>
    </div>
    <div className="col-md-6 p-4 font rounded-30">
      <center>
        <h3 className="font">Teacher Register Here</h3>
      </center>
      <div className="form-group mt-2">
        <input
          type={"number"}
          ref={tid}
          placeholder="Enter Teacher Id"
          className="form-control form-control-sm"
        ></input>
      </div>
      <div className="form-group mt-2">
        <input
          type={"text"}
          ref={tname}
          placeholder="Enter Teacher name"
          className="form-control form-control-sm"
        ></input>
      </div>
      <div className="form-group mt-2">
        <input
          type={"password"}
          placeholder="Enter Password"
          ref={password}
          className="form-control form-control-sm"
        ></input>
      </div>
      <div className="form-group mt-2">
        <input
          type={"number"}
          ref={mobno}
          placeholder="Enter mobile number"
          className="form-control form-control-sm"
        ></input>
      </div>
      <div className="form-group mt-3">
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
          <label className="form-check-label mx-2" htmlFor="radio-option1">
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
          <label className="form-check-label mx-2" htmlFor="radio-option2">
            Female
          </label>
        </div>
      </div>
   

            <div className="form-group ">

              <input
                type={"email"}
                ref={email}
                placeholder="Enter Email"
                className="form-control form-control-sm"
              ></input>
            </div>
            <div className="form-group mt-2">
              <input
                type={"datetime-local"}
                ref={dob}
                className="form-control form-control-sm"
              ></input>
            </div>
            <div className="form-group mt-2">
              <select className="form-select w-100 form-select-sm" ref={head}>
                <option value="">--Select a Standard--</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
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

              <input
                type={"number"}
                ref={salary}
                placeholder="Enter Salary"
                className="form-control form-control-sm"
              ></input>
            </div>
            <div className="form-group mt-2">
              <input
                type={"file"}
                onChange={imageChange}
                placeholder={"upload Image"}
                className="form-control form-control-sm"
              ></input>
            </div>
            <div  id="btn1" className="form-group mt-3 ">
              <button className="btn btn-success " id="btn" onClick={register}>
                Register
              </button>
              <button className="btn btn-danger mx-5">Clear</button>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};
export default Register;
