import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import OrderDetail from "./components/Dashboard/Marketplace/OrderDetail";
import Feature from "./components/Feature/Feature";
import Plan from "./components/Plan/Plan";
import AnimatedBackground from "./components/Service/AnimatedBackground";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-[#070C0F] via-[#0A1219] to-[#070C0F] overflow-hidden relative">
        <main className="p-0 mx-auto w-full min-h-screen max-w-[1512px] px-2 sm:px-6 lg:px-8">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />

                  <Feature />
                  <Plan />
                  <Service />
                  <Footer />
                </>
              }
            />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/order" element={<OrderDetail />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
