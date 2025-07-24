import "./Navbar.css"
import {Link} from "react-router-dom"
import { useRef } from "react"
function Nav(){
    var obj=useRef()

    const changebtnname=()=>{
        var logindom=obj.current
        if(logindom.textContent==="Login"){
             logindom.textContent="Logout"
            
        }else{
             logindom.textContent="Login"
        }
       

    }
    return (
        <div className="navbar">
            <div className="left">
                <h2><img height={50} width={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6k5Tu66DF6VCECJhNpevf6DrSSn81KRaA9Q&s" alt="" /></h2>
                
                </div>
            <div className="right">
                <Link to="/">Home</Link>
                <Link to="/jewelery">Jewelery</Link>
                <Link to="/electronics">Electronics</Link>
                <Link to="/mens">Mens</Link>
                <Link to="/womens">Womens</Link>
                <Link to="/profile">Profile</Link>
                <Link  to="loginuser"><button ref={obj} onClick={changebtnname} id="btn">
                    Login
                </button></Link>
            
            </div>
        </div>
    )
}
export default Nav