import React, { useContext } from "react";
import AppContext from "../../AppContext";
import Banner from "../../components/Banner";
import Products from "../../components/Products";
import './styles.css';

const Home = props => {
  const { } = useContext(AppContext)
  return <div className="app-container">
    <Banner/>
    <Products/>
  </div>
}

export default Home;