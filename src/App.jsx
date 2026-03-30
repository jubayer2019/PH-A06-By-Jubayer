import Banner from "./component/Banner";
import Footer from "./component/Footer";
import GetStarted from "./component/GetStarted";
import NavBar from "./component/NavBar";
import Pricing from "./component/pricing";
import Rating from "./component/Rating";
import ReadyToTransform from "./component/ReadyToTransform";

function App() {

  return (
    <>
    <NavBar></NavBar> 
    <Banner></Banner>
    <Rating></Rating>
    <GetStarted></GetStarted>
    <Pricing></Pricing>
    <ReadyToTransform></ReadyToTransform>
    <Footer></Footer>
    </>
  )
}

export default App
