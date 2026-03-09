import React,{useState,useEffect} from "react";

function ProductList(){

const [products,setProducts] = useState([]);

useEffect(()=>{

fetch("http://localhost:5000/products")
.then(res=>res.json())
.then(data=>setProducts(data));

},[]);

return(

<div>

<h2>Available Products</h2>

<ul>

{products.map((p)=>(
<li key={p.id}>
{p.product_name} - ₹{p.price}
</li>
))}

</ul>

</div>

);

}

export default ProductList;