import "./Products.css"
import Cards from "../cards/Card"
import { useState,useEffect } from "react"
import getproductsdata from "./producrservices/Products"
import Corosel from "../courosel/Courosel"
function Products({url}){
    const [products,setProducts]=useState([])
  useEffect(()=>{
        getproductsdata(setProducts,url)
  },[url])
  
    return (
        
            <div className="container">
                <div className="minicontainer">
                       {<Corosel data={products}/>}
                </div>
                <div className="addproductscontainer">
                          {
                            products.map((items)=>{
                                return <Cards data={items}/>
                            })
                          }
                </div>
            </div>
        
    )

}
export default Products