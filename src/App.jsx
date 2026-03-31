import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import Rating from "./component/Rating";
import PremiumDigitalTool from "./component/PremiumDigitalTool";
import DigitalTools from "./component/DigitalTools";
import Cart from "./component/Cart";
import GetStarted from "./component/GetStarted";
import Pricing from "./component/pricing";
import ReadyToTransform from "./component/ReadyToTransform";
import Footer from "./component/Footer";

// Data Fetching
const getDigitalTools = async () => {
  const res = await fetch("/products.json");
  return res.json();
};
const digitalPromise = getDigitalTools();

function App() {
  const [activeTab, setActiveTab] = useState("digitaltools");
  const [cart, setCart] = useState([]);

  // Add to Cart Logic
  const addToCart = (product) => {
    if (!cart.find((item) => item.title === product.title)) {
      setCart([...cart, product]);
      toast.success(`${product.title} added to cart!`);
    } else {
      toast.error("Item already in cart");
    }
  };

  // Remove from Cart Logic
  const removeFromCart = (productTitle) => {
    setCart(cart.filter((item) => item.title !== productTitle));
    toast.error("Item removed from cart");
  };

  // Checkout Logic
  const checkout = () => {
    setCart([]);
    toast.success("Order processed successfully!", { icon: '🚀' });
  };

  const total = cart.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <>
      <Toaster position="top-right" />
      <NavBar cartCount={cart.length} />
      <Banner />
      <Rating />
      <PremiumDigitalTool />

      {/* Tabs Section */}
      <div className="tabs max-w-xs md:max-w-[25%] mx-auto mt-4 mb-8 rounded-full border border-slate-200 p-1 flex justify-center bg-white shadow-sm">
        <input 
          type="radio" 
          name="my_tabs_1" 
          className="tab flex-1 font-bold rounded-full checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white transition-all" 
          aria-label="Products" 
          defaultChecked
          onClick={() => setActiveTab("digitaltools")}
        />
        
        <input 
          type="radio" 
          name="my_tabs_1" 
          className="tab flex-1 font-bold rounded-full checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white transition-all" 
          /* Updated aria-label to show inline count */
          aria-label={cart.length > 0 ? `Cart (${cart.length})` : "Cart"}
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {/* Conditional Rendering */}
      {activeTab === "digitaltools" ? (
        <DigitalTools digitalPromise={digitalPromise} onBuy={addToCart} cartItems={cart} />
      ) : (
        <Cart cartItems={cart} onRemove={removeFromCart} onCheckout={checkout} totalAmount={total} />
      )}

      <GetStarted />
      <Pricing />
      <ReadyToTransform />
      <Footer />
    </>
  );
}

export default App;