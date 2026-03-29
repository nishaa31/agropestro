import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DiseaseDetection from "./pages/DiseaseDetection";
import YieldPrediction from "./pages/YieldPrediction";
import Weather from "./pages/Weather";
import Market from "./pages/MarketPrices";

const isLoggedIn = () => localStorage.getItem("agropestro_user");

function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}

function Protected({ children }) {
  return isLoggedIn() ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/" element={
          <Protected>
            <Layout><Dashboard /></Layout>
          </Protected>
        } />

        <Route path="/disease" element={
          <Protected>
            <Layout><DiseaseDetection /></Layout>
          </Protected>
        } />

        <Route path="/yield" element={
          <Protected>
            <Layout><YieldPrediction /></Layout>
          </Protected>
        } />

        <Route path="/weather" element={
          <Protected>
            <Layout><Weather /></Layout>
          </Protected>
        } />

        <Route path="/market" element={
          <Protected>
            <Layout><Market /></Layout>
          </Protected>
        } />

      </Routes>

    </BrowserRouter>
  );
}