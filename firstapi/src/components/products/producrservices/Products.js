import axios from "axios"

const getproductsdata=(setProducts,url)=>{
    axios.get(url)
    .then((res)=>{
     setProducts(res.data)
    })
    .catch((error)=>{
     alert(`${error} data occured`)
    })

}
export default getproductsdata