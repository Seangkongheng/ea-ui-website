import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import Feature from "./components/Feature/Feature";
import Plan from "./components/Plan/Plan";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import OrderDetail from "./components/Dashboard/Marketplace/OrderDetail";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Downlaod from "./components/download/Downlaod";
import Product from "./components/Product/Product";
import FeaturePage from "./components/Feature/FeaturePage";
import VerifyLogin from "./components/VerifyLogin/VerifyLogin";

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-[#070C0F] via-[#0A1219] to-[#070C0F] overflow-hidden relative">
        
        {/* Navbar always visible */}
        <Navbar />

        <main className="mx-auto w-full min-h-screen max-w-[1512px] px-2 sm:px-6 lg:px-8">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Feature />
                  <Plan />
                  <Service />
                </>
              }
            />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/order" element={<OrderDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/download" element={<Downlaod />} />
            <Route path="/product" element={<Product />} />
            <Route path="/feature" element={<FeaturePage />} />
            <Route path="/verify-login" element={<VerifyLogin />} />

          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
