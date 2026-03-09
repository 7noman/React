import React,{useState} from "react";

function CustomerForm(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");

const submitCustomer = async () => {

if(name === ""){
alert("Name required");
return;
}

await fetch("http://localhost:5000/customers",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
name,
email,
phone
})

});

alert("Customer Registered");

};

return(

<div>

<h2>Customer Registration</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
placeholder="Phone"
onChange={(e)=>setPhone(e.target.value)}
/>

<button onClick={submitCustomer}>
Register
</button>

</div>

);

}

export default CustomerForm;