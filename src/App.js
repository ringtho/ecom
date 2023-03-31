import { useEffect } from "react";
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  useLocation } from "react-router-dom"
import Home from "./pages/home/Home";


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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
