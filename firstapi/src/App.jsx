import Electronics from "./components/electronics/Electronics"
import Jewelery from "./components/jewelry/Jewelery"
// import Mens from "./components/mens/Mens"
// import Womens from "./components/womens/Womens"
import Alldetail from "./components/alldetails/Alldetails"
import Nav from "./components/nav/Navbar"
import {Route,Routes} from "react-router-dom"
import Page from "./components/pagenotfound/Page"
import Home from "./components/home/Home"
import Details from "./components/productdetails/Productdetails"
import Profile from "./components/profile/Profile"
import Detailsdeep from "./components/details/Details"
import Wishlist from "./components/wishlist/Wishlist"
import Orders from "./components/orders/Orders"
import Changepassword from "./components/changepassword/Changepassword"
import Help from "./components/help/Help"
import Useref from "./components/useref/Useref"
import Useref11 from "./components/useref/Useref11"
import Detailedcomp from "./components/redux/Details"
import User1 from "./components/redux/reduxname"
import User2 from "./components/redux/User2"
import Cart from "./components/cart/Cart"
import Load from "./components/loading/Loading"
import { lazy ,Suspense} from "react"
import Loginuser from "./components/logincomponent/Loginuser"

const LazyMensclothing=lazy(()=>{return import("./components/mens/Mens")})

const Womensclothing=lazy(()=>{return import("./components/womens/Womens")})


function App(){
  return (
    <div className="app">
      <Nav/>
      {/* <div className="d-flex justify-content-center">
      <User1/>
      <User2/>
      </div> */}
     
      
     
   
    
<Routes>
<Route path={"/"} element={<Home/>}/>

<Route path={"/loginuser"} element={<Loginuser/>}  />
      <Route path={"/electronics"} element={<Electronics/>}/>
      <Route path={"/jewelery"} element={<Jewelery/>}/>
      <Route path={"/mens"} element={<Suspense fallback={<Load/>}>
        <LazyMensclothing/>
      </Suspense>}/>
      <Route path={"/womens"} element={<Suspense fallback={<Load/>}>
        <Womensclothing />
      </Suspense>}/>
   
      <Route path={"/productdetails/:id"} element={<Details/>}/>
      <Route path={"/profile"} element={<Profile/>}>
      <Route path={"Cart"} element={<Cart/>}></Route>
      <Route path={"Details"} element={<Detailsdeep/>}></Route>
      <Route path={"Orders"} element={<Orders/>}></Route>
      <Route path={"Wishlist"} element={<Wishlist/>}></Route>
      <Route path={"Changepassword"} element={<Changepassword/>}></Route>
      <Route path={"Help"} element={<Help/>}></Route>
      </Route>
      <Route path={"*"} element={<Page/>}/>
      </Routes>
    </div>
  )
}

export default App