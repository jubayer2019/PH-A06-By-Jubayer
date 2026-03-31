import Banner from "./component/Banner";
import Cart from "./component/Cart";
import DigitalTools from "./component/DigitalTools";
import Footer from "./component/Footer";
import GetStarted from "./component/GetStarted";
import NavBar from "./component/NavBar";
import PremiumDigitalTool from "./component/PremiumDigitalTool";
import Pricing from "./component/pricing";
import Rating from "./component/Rating";
import ReadyToTransform from "./component/ReadyToTransform";
import React, { useState } from 'react';


const getDigitalTools = async () => {
  const res = await fetch("/products.json");
  return res.json();
}

const digitalPromise = getDigitalTools();
// const [activeTab, setActiveTab] = useState("DigitalTools");
// console.log(activeTab);

function App() {

  
const [activeTab, setActiveTab] = useState("digitaltools");

  console.log(activeTab);


  return (
    <>
    <NavBar></NavBar> 
    <Banner></Banner>
    <Rating></Rating>
    <PremiumDigitalTool></PremiumDigitalTool>

    <div className="tabs max-w-[22%] mx-auto mt-4 mb-4 rounded-full tabs-box">
        <input 
        type="radio" 
        name="my_tabs_1" 
        className="tab w-40 font-bold rounded-full checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white" 
        aria-label="Products" 
        defaultChecked
        onClick={()=> setActiveTab("digitaltools")}
        />

        <input 
        type="radio" 
        name="my_tabs_1" 
        className="tab w-30 font-bold rounded-full checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white" 
        aria-label="Cart"
        onClick={()=> setActiveTab("cart")}
        />
    </div>

    {activeTab === "digitaltools" && <DigitalTools digitalPromise={digitalPromise}></DigitalTools>}
    {activeTab === "cart" && <Cart></Cart>}
    <GetStarted></GetStarted>
    <Pricing></Pricing>
    <ReadyToTransform></ReadyToTransform>
    <Footer></Footer>
    </>
  )
}

export default App
