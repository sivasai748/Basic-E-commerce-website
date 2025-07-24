import { useRef } from "react"
import Useref from "./Useref"

function Useref11(){
    var obj1=useRef()
    var btn1=useRef()

    const changecontent=()=>{
        const h1=obj1.current
       
        h1.textContent="heading of useref"
        const butt=btn1.current
        butt.innerText="changed";
        butt.style.color="orange";
    

    }
    return(
        <div>
            <h1 ref={obj1} className="m-5">another component</h1>
            <button ref={btn1} onClick={changecontent} className="btn btn-primary">change h1</button>
        </div>
    )
}
export default Useref11