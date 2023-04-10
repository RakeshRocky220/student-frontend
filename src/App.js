import { Route,Routes,NavLink } from "react-router-dom"
import Register from "./Components/Register"
import Login from "./Components/Login"
import Contact from "./Components/Contact"
import Dashboard from "./Components/Dashboard"
const App=()=>{
return(
    <>
<nav style={{backgroundColor:`black`}} className="navbar navbar-expand-lg ">

    <ul  className="navbar-nav mt-2 ">
     <li>   <NavLink to={"/"} style={{fontWeight:`bolder`}} className="nav-link active text-light "><i style={{color:`white`,fontSize:`40px`}} className="fa fa-graduation-cap" aria-hidden="true"></i></NavLink></li>
     <li>    <NavLink to={"/"} className="nav-link  text-light"><h3 style={{fontFamily:`Baloo Bhai 2`}}>New Vision</h3></NavLink></li>
       
     <li>    <NavLink to={"/"} className="nav-link text text-light mt-2 mx-3">Home</NavLink></li>
     <li>    <NavLink to={"/login"} className="nav-link text text-light mt-2 mx-3">Login</NavLink></li>
     <li>    <NavLink to={"/contact"} className="nav-link text text-light mt-2 mx-3">AboutUs</NavLink></li>
     <li>    <NavLink to={"/dashboard"} className="nav-link text text-light mt-2 mx-3">dashboard</NavLink></li>

    </ul>
</nav>
<Routes>
    <Route path="/" element={<Register></Register>}>
   
    </Route>
    <Route path="/login" element={<Login></Login>}>
       
    </Route>
    <Route path="/contact" element={<Contact></Contact>}>
       
    </Route>
    <Route  path="/dashboard" element={<Dashboard></Dashboard>}>

    </Route>
</Routes>
    </>
)
}
export default App