
import Footer from "../../components/Footer/Footer";
import React from "react";
import Services from "../../components/Services/Services";
import Category from "../Category/Category";
import ClientdachLayout from "./ClientdachLayout"

const ClientInterface = () => {
 
  
  return (
    
      <div className="r-wrapper">
        <ClientdachLayout/>
       <Category/>
      <Services/>
      <Footer/>
      </div>
  
  );
};

export default ClientInterface

