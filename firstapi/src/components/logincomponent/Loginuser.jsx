import { Link } from "react-router-dom"
import "./Loginuser.css"
function Loginuser(){
    return(
        <div>
        <div className="ruler">
            
           <form action="submit">
    <div className="bg">
        <h1 style={{color:"white",fontWeight:"bold"}}>Login</h1>
        <div className="bg1">
        <label style={{color:"white",fontWeight:"bolder",fontSize:"20px"}}>Username</label><br />
        <input type="text" placeholder="Enter Username" style={{borderRadius:"10px",border:"0px solid white",padding:"7px",width:"250px"}} required/>
        
    </div>

    <div className="bg1">
        <label  style={{color:"white",fontWeight:"bolder",fontSize:"20px"}}>Password</label><br />
        <div className="bg1">
        <input type="password" placeholder="Enter Password" style={{borderRadius:"10px",border:"0px solid white",padding:"7px",width:"250px"}} required/>
        </div>
    </div><br />
    
        <div className="remembercont">
        <label style={{color:"skyblue"}}><input type="checkbox"/>Remember Me</label>
      
        
        <a style={{color:"skyblue"}} href="resetpass.html">Forgot Password?</a>
        </div><br />
   <Link to="/"><input style={{width:"300px",borderRadius:"8px",backgroundColor:"skyblue",border:"0px solid white",padding:"10px",color:"white",fontSize:"20px",fontWeight:"bold"}}  type="button" value="Login"/></Link>  <br /><br />
    <p style={{color:"black"}}>Don't have account?<a href="" style={{color:"skyblue"}}>Register</a> </p>
    
    </div>
    
    </form>
        </div>
        </div>
    )
}
export default Loginuser










