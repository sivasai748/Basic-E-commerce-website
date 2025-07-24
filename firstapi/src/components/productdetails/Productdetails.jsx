import { useEffect, useState } from "react"
import "./producrdetails.css"
import { useParams } from "react-router-dom"
import axios from "axios"

function Details(){
     //this hook is used to access the path params from url
  const [product,setProduct]=useState({
    title:"",
    id:0,
    category:"",
    description:"",
    price:0,
    rating:{rate:0,count:0},
    image:""
  })
  var {id}= useParams()
useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`)
    .then((p)=>{
        setProduct(p.data)
         console.log(p.data)
    })
    .catch((error)=>{
        alert(`errored data ${error}`)
    })

})
const added=()=>{
    axios.post("http://localhost:3000/Addtocart",product)
    .then(()=>{
        alert("Added to cart")

    })
    .catch(()=>{
        alert("item not added")
    })
}

    return(
        <div className="productdetailsconainer">
            <div className="leftcont">
                <img src={product.image} alt="" height={"100%"} width={"100%"}/>
            </div>
            <div className="rightcont">
                <dl>
                    <dt><b>product name</b></dt>
                    <dd>{product.title}</dd>
                    <dt><b>product id</b></dt>
                    <dd>{product.id}</dd>
                    <dt><b> category</b></dt>
                    <dd>{product.category}</dd>
                    <dt><b>Description</b></dt>
                    <dd>{product.description.slice(0,100)}</dd>
                    <dt><b>price</b></dt>
                    <dd>{product.price}</dd>
                    <dt><b>Rating</b></dt>
                    <dd>{product.rating.rate}</dd>
                    
                    
                </dl>
                <div>
                    <button onClick={added} className="btn btn-outline-primary m-2">Add to cart</button>
                    <button className="btn btn-outline-success m-2">Wishlist</button>
                </div>

            </div>
        </div>
    )
}
export default Details