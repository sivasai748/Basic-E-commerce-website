import {Link} from "react-router-dom"
import "./Card.css"
import axios from "axios"
function Cards({data}){
    const {image,title,price,rating,id}=data
    const addtocart=()=>{
        axios.post("http://localhost:3000/Addtocart",data)
        .then(()=>{
            alert("Added to cart")

        }).
        catch(()=>{
            alert("failed to add item")
        })

    }
    return (
        <div className="card11">
            <img src={image} alt="" height="280" width="250" />
            <h5>{title.slice(0,20)}</h5>
            <p>${price}</p>
            <p>{rating.rate}</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <div style={{display:"flex",justifyContent:"space-evenly"}}> <br/>
           <button ><Link style={{textDecoration:"none",color:"white"}} to={`/productdetails/${id}`}>Product details</Link></button> 
            <button onClick={addtocart}>Add to Cart</button>
            </div>

        </div>
    )
}
export default Cards