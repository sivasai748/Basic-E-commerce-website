import "./Profile.css"
import { Link,Outlet } from "react-router-dom"
function Profile(){
    return (
        <div className="profiledivcont">
            <div className="leftdiv">
            <div style={{padding:"30px"}}>
                 <Link style={{textDecoration:"none",fontSize:"19px"}} to="Cart">Cart</Link>
                </div>
                <div style={{padding:"30px"}}>
                 <Link style={{textDecoration:"none",fontSize:"19px"}} to="Details">Details</Link>
                </div>
                <div style={{padding:"30px"}}>
                <Link style={{textDecoration:"none",fontSize:"19px"}} to="Orders" >Orders</Link>
                </div>
                <div style={{padding:"30px"}}>
                <Link style={{textDecoration:"none",fontSize:"19px"}} to="Wishlist">Wishlist</Link>
                </div>
                <div style={{padding:"30px"}}>
                <Link style={{textDecoration:"none",fontSize:"19px"}} to="Changepassword">Change password </Link>
                </div>
                <div style={{padding:"30px"}}>
                <Link style={{textDecoration:"none",fontSize:"19px"}} to="Help">Help and contact</Link>
                </div>
            </div>
            <div className="rightdiv">
                <Outlet/>
            </div>
        </div>
    )
}
export default Profile