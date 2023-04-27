import { Route,Routes,NavLink } from "react-router-dom"
import Register from "./Register"
import Login from "./Login"
import Contact from "./Contact"
import Dashboard from "./Dashboard"
import AddStudent from "./AddStudent"
import Attendence from "./Attendence"
import Students from "./Students"
import './Nav.css'
const Navbar=()=>{
  
return(
   <>
  
  <nav style={{zIndex: 1000}} className="navbar navbar-expand-lg bg-dark rounded 50px m-1 fixed-top">
  <div className="container-fluid">
    <NavLink className="navbar-brand gradient" to="#"><i style={{color:`white`,fontSize:`35px`}} className="fa fa-graduation-cap" aria-hidden="true"></i>School</NavLink>
    <button className="navbar-toggler" type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#navbarSupportedContent"} aria-controls={"navbarSupportedContent"} aria-expanded={"false"} aria-label={"Toggle navigation"}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className="nav-link active gradient mt-4" aria-current="page" to="/student-frontend"><p >Home</p></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link gradient mt-4" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link gradient mt-4" to="/contact">About</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>








<Routes>
<Route path="/student-frontend" element={<Register></Register>}>

</Route>
<Route path="/login" element={<Login></Login>}>
   
</Route>
<Route path="/contact" element={<Contact></Contact>}>
   
</Route>
<Route path="/dashboard" element={<Dashboard></Dashboard>}>
<Route path="/dashboard/attendence/:var1" element={<Attendence></Attendence>}></Route>
 <Route path="/dashboard/addstudent/:var1" element={<AddStudent></AddStudent>}></Route>
 <Route path="/dashboard/students/:var1" element={<Students></Students>}></Route>
 <Route path="/dashboard/login" element={<Login></Login>}></Route>
</Route>
</Routes>
   </>
)
}
export default Navbar