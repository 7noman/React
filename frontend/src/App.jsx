import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomerForm from "./components/CustomerForm";
import ProductList from "./components/ProductList";
import OrderForm from "./components/OrderForm";

import "./style.css";

function App(){

  return(

    <div className="container">

      <Header />

      <div className="main">

        <CustomerForm />

        <ProductList />

        <OrderForm />

      </div>

      <Footer />

    </div>

  );

}

export default App;