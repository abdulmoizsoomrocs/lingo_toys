import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AuthHome from "./pages/AuthHome";
import ProductGridPage from "./pages/ProductGridPage";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import CheckOut from "./pages/CheckOut";
import ProductDetail from "./pages/ProductDetail";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ProtectedRoute from "./auth/ProtectedRoute";
import { isAuthenticated } from "./utils/authHelper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Home - Shows auth UI if not logged in */}
        <Route path="/" element={isAuthenticated() ? <Home /> : <AuthHome />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* App Routes */}
        <Route path="/products" element={<ProductGridPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        
        {/* Protected Routes (Optional) */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckOut />
            </ProtectedRoute>
          }
        />
        
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
