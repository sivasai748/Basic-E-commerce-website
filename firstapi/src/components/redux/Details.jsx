import { useSelector } from "react-redux"
function Detailedcomp(){
  let storedat=  useSelector((soredat)=>{
      return soredat
    })
    return (
        <div>
          
            <p className="text-success">data is : {storedat}</p>
        </div>
    )
}
export default Detailedcomp