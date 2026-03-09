import React,{useState,useContext} from "react";
import {AppContext} from "../context/AppContext";

function OrderForm(){

const {orders,setOrders} = useContext(AppContext);

const [customer_id,setCustomer] = useState("");
const [product_id,setProduct] = useState("");
const [quantity,setQuantity] = useState("");

const placeOrder = async () => {

await fetch("http://localhost:5000/orders",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
customer_id,
product_id,
quantity
})

});

setOrders([...orders,{customer_id,product_id,quantity}]);

alert("Order Placed Successfully");

};

return(

<div>

<h2>Place Order</h2>

<input
placeholder="Customer ID"
onChange={(e)=>setCustomer(e.target.value)}
/>

<input
placeholder="Product ID"
onChange={(e)=>setProduct(e.target.value)}
/>

<input
placeholder="Quantity"
onChange={(e)=>setQuantity(e.target.value)}
/>

<button onClick={placeOrder}>
Place Order
</button>

</div>

);

}

export default OrderForm;
