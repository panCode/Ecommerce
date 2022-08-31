import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from "../../AppContext";
import Details from "../../components/Details";
import Home from "../Home";

const RouterContainer = (props) => {
  const { productsList, selectedItems } = useContext(AppContext);

  const onCheckoutClick = () => {
    console.log('--- Selected Items ---')
    productsList.forEach(product => {
      if (selectedItems.includes(product.id)) {
        console.log('Description', product.description);
        console.log('Price', product.price);
        console.log('Id', product.id);
      }
    })
  }

  return <BrowserRouter>
    <Routes>
      <Route path="/details" element={<Details {...props}/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <div className="checkoutButton" onClick={onCheckoutClick}>
      Checkout
    </div>
  </BrowserRouter>
}

export default RouterContainer;
