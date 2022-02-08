import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopMenuBar from "./Components/Includes/TopMenuBar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Includes/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import AyalaFish from "./Components/Products/AyalaFish";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Cart/Checkout";
import AllProducts from "./Components/Products/AllProducts";

function App() {

  return (
    <Router>
      <TopMenuBar />
      <Routes>
        {/* Main Routes */}
        <Route path="/pondybay" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Main Routes */}

        {/* Login Routes */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/cart" element={<Cart />} />

        {/* <Route element={<Protected />}> */}
          <Route path="/checkout" element={<Checkout />} />
        {/* </Route> */}

        {/* Login Routes */}

        {/* Product Routes */}
        {/* <Route path="/products/:productID" element={<ProductDetail />} /> */}

        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/ayala-fish" element={<AyalaFish />} />

        {/* Product Routes*/}

        {/* Page Not Found Routes */}
        <Route element={<PageNotFound />} />
        {/* Page Not Found Routes */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
