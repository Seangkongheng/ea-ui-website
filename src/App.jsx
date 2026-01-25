import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import Feature from "./components/Feature/Feature";
import Plan from "./components/Plan/Plan";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import OrderDetail from "./components/Dashboard/Marketplace/OrderDetail";
import About from "./components/About/About";
import Downlaod from "./components/download/Downlaod";
import Product from "./components/Product/Product";
import FeaturePage from "./components/Feature/FeaturePage";

import VerifyLogin from "./components/VerifyLogin/VerifyLogin";
import Verify from "./components/VerifyLogin/Verify";
import VerifySuccess from "./components/VerifyLogin/VerifySuccess";
import WaitingVerify from "./components/VerifyLogin/WaitingVerify";
import VerifyFailed from "./components/VerifyLogin/VerifyFailed";

import Navbar from "./components/Navbar/Navbar";
import NavbarDashbaord from "./components/Dashboard/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";


import { useAuthModal } from "./context/AuthModalContext";
import SignUpForm from "./components/Auth/SignUpForm";
import LoginForm from "./components/Auth/LoginForm";
import Modal from "./components/Login/Modal";
import MarketplaceDetail from "./components/Dashboard/Marketplace/MarketplaceDetail";

/* ---------- Layouts ---------- */

const PublicLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const DashboardLayout = () => (
  <>
    <NavbarDashbaord />
    <Outlet />
  </>
);

/* ---------- App ---------- */

function App() {
  const isLoggedIn = !!localStorage.getItem("token");
  const { isOpen, closeModal, isSignUp } = useAuthModal();

  return (
    <Router>
      {/* GLOBAL AUTH MODAL */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        {isSignUp ? <SignUpForm /> : <LoginForm />}
      </Modal>

      <div className="App min-h-screen font-Kantumruy bg-gradient-to-br from-[#070C0F] via-[#0A1219] to-[#070C0F]">
        <Routes>
          {/* -------- PUBLIC -------- */}
          <Route element={<PublicLayout />}>
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <>
                    <Home />
                    <Feature />
                    <Plan />
                    <Service />
                  </>
                )
              }
            />

            <Route
              path="/about"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <About />}
            />
            <Route
              path="/download"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <Downlaod />}
            />
            <Route
              path="/product"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <Product />}
            />
            <Route
              path="/feature"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <FeaturePage />}
            />

            <Route
              path="/verify/:id"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <Verify />}
            />
            <Route
              path="/verify-success"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <VerifySuccess />}
            />
            <Route
              path="/verify-failed"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <VerifyFailed />}
            />
            <Route
              path="/waiting-verify"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <WaitingVerify />}
            />
            <Route
              path="/verify-login"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <VerifyLogin />}
            />
          </Route>

          {/* -------- DASHBOARD (PROTECTED) -------- */}
          <Route
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/order-detail" element={<OrderDetail />} />
            <Route path="/marketplace/:id" element={<MarketplaceDetail />} />

          </Route>

          {/* -------- FALLBACK -------- */}
          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/dashboard" : "/"} replace />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
