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
import SardineFish from "./Components/Products/SardineFish";
import Grouper from "./Components/Products/Grouper";
import Tuna from "./Components/Products/Tuna";
import VanjaramFish from "./Components/Products/VanjaramFish";
import Prawns from "./Components/Products/Prawns";
import Cobia from "./Components/Products/Cobia";
import RedSnapper from "./Components/Products/RedSnapper";
import BlackSnapper from "./Components/Products/BlackSnapper";
import BlackPomfret from "./Components/Products/BlackPomfret";
import WhiteSnapper from "./Components/Products/WhiteSnapper";
import MahiFish from "./Components/Products/MahiFish";
import IndianSalmonFish from "./Components/Products/IndianSalmonFish";
import LadyFish from "./Components/Products/LadyFish";
import YellowfrinTunaFish from "./Components/Products/YellowfrinTunaFish";
import WhitePomfretFish from "./Components/Products/WhitePomfret";
import PearlSpotFish from "./Components/Products/PearlSpotFish";
import SquidFish from "./Components/Products/SquidFish";
import SoleFish from "./Components/Products/SoleFish";
import SharkFish from "./Components/Products/SharkFish";
import Dashboard from "./Components/Dashboard/Dashboard";
import EditProduct from "./Components/Dashboard/EditProduct";

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
        <Route
          path="/product/vanjaram-fish"
          element={<VanjaramFish />}
        ></Route>
        <Route path="/product/prawns" element={<Prawns />}></Route>
        <Route path="/product/cobia" element={<Cobia />}></Route>
        <Route path="/product/red-snapper" element={<RedSnapper />}></Route>
        <Route
          path="/product/black-snapper"
          element={<BlackSnapper />}
        ></Route>
        <Route
          path="/product/black-pomfret"
          element={<BlackPomfret />}
        ></Route>
        <Route
          path="/product/white-snapper"
          element={<WhiteSnapper />}
        ></Route>
        <Route path="/product/mahi-fish" element={<MahiFish />}></Route>
        <Route
          path="/product/indian-salmon-fish"
          element={<IndianSalmonFish />}
        ></Route>
        <Route path="/product/sole-fish" element={<SoleFish />}></Route>
        <Route path="/product/lady-fish" element={<LadyFish />}></Route>
        <Route
          path="/product/yellowfin-tuna-fish"
          element={<YellowfrinTunaFish />}
        ></Route>
        <Route
          path="/product/white-pomfret"
          element={<WhitePomfretFish />}
        ></Route>
        <Route
          path="/product/pearl-spot-fish"
          element={<PearlSpotFish />}
        ></Route>
        <Route path="/product/squid-fish" element={<SquidFish />}></Route>
        <Route path="/product/shark-fish" element={<SharkFish />}></Route>
        <Route path="/product/Tuna-fish" element={<Tuna />}></Route>
        <Route path="/product/grouper-fish" element={<Grouper />}></Route>
        <Route
          path="/product/sardine-fish"
          element={<SardineFish />}
        ></Route>

        {/* Product Routes*/}

        {/* Dashboard */}

        <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product/edit/:id" element={<EditProduct />}></Route>

        {/* Page Not Found Routes */}
        <Route element={<PageNotFound />} />
        {/* Page Not Found Routes */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
