import axios from "axios";
import { useState, useEffect } from "react";

function Cart() {
    const [cartindata, setCart] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/Addtocart")
            .then((res) => {
                setCart(res.data);
            })
            .catch(() => {
                alert("Error fetching data");
            });
    }, []);
    
    const removeitem=(id)=>{
        axios.delete(`http://localhost:3000/Addtocart/${id}`)
        .then(()=>{
            axios.get("http://localhost:3000/Addtocart")
            .then((res)=>{
                setCart(res.data)

            })
            .catch(()=>{
                alert("error")
            })

        })
        .catch(()=>{
            alert("error in delete a item")
        })

    }

    return (
        <div className="m-3">
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Title</th>
                        <th>Qty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartindata.map((item) => {
                        return (
                            <tr key={item.id}> 
                                <td>
                                    <img src={item.image}  height={100} width={100} />
                                </td>
                                <td>{item.price}</td>
                                <td>{item.title}</td>
                                <td>1</td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>{
                                        removeitem(item.id)
                                    }}>Remove</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Cart;
