import mystore from "../../reduxstore/Reduxstorecreate"
import actionuser1 from "../../actioncrestortosenddata/Actioncreator"
import { useRef } from "react"
import { useSelector } from "react-redux"
function User1(){
    var response=useSelector((e)=>{
        return e
    })
    var obj1=useRef()
    const send=()=>{
    var actionobj= actionuser1(obj1.current.value)
     mystore.dispatch(actionobj)

    }
    
    return (
        <div className="bg-dark p-5 text-white text-center m-3 " style={{height:"350px",width:"450px"}}>
             <h1>Alice component </h1><br />
             <input ref={obj1} style={{width:"300px"}} type="text" placeholder="enter text" /><br /><br />
             <button  onClick={send} className="btn btn-outline-info">send</button><br /><br />
             <p>{response.user2}</p>
        </div>
    )
}
export default User1