import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DiseaseDetection from "./pages/DiseaseDetection";
import YieldPrediction from "./pages/YieldPrediction";
import FarmDetails from "./pages/FarmDetails";
import MarketPrices from "./pages/MarketPrices";
import Weather from "./pages/Weather";

const isLoggedIn = () => localStorage.getItem("agropestro_user");

function Protected({ children }) {
  return isLoggedIn() ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Protected><Dashboard /></Protected>} />

        <Route path="/disease" element={<Protected><DiseaseDetection /></Protected>} />

        <Route path="/yield" element={<Protected><YieldPrediction /></Protected>} />

        <Route path="/farm" element={<Protected><FarmDetails /></Protected>} />

        <Route path="/market" element={<Protected><MarketPrices /></Protected>} />

        <Route path="/weather" element={<Protected><Weather /></Protected>} />

      </Routes>
    </BrowserRouter>
  );
}