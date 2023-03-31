import { useEffect } from "react";
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  useLocation } from "react-router-dom"
import Home from "./pages/home/Home";
import ItemDetails from "./pages/itemDetails/ItemDetails";
import Checkout from "./pages/checkout/Checkout";
import Confirmation from "./pages/checkout/Confirmation";
import Navbar from "./pages/global/Navbar";


const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])
  return null
}  


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="item/:itemId" element={<ItemDetails />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="checkout/success" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
