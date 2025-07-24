import { useRef } from "react"
import actionuser2 from "../../actioncrestortosenddata/Actionforuser2"
import mystore from "../../reduxstore/Reduxstorecreate"
import { useSelector } from "react-redux"
function User2(){
    var response=useSelector((e)=>{
        return e
    })
    var obj2=useRef()
    const sendtoalice=()=>{
        var actionobj2=actionuser2(obj2.current.value)
        mystore.dispatch(actionobj2)
    }
    
    return(
        <div className="bg-dark m-3 p-5 text-white text-center" style={{height:"350px",width:"450px"}}>
             <h1>Bob component</h1> <br />
             <input ref={obj2}  style={{width:"300px"}} type="text" placeholder="enter text" /><br /><br />
             <button onClick={sendtoalice}  className="btn btn-outline-info">send</button><br /><br />

             <p>{response.user1}</p>
        </div>
    )
}
export default User2