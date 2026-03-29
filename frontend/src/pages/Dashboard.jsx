import Sidebar from "../components/Sidebar";

export default function Dashboard() {

  const user = JSON.parse(localStorage.getItem("agropestro_user") || "{}");

  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ padding: "30px", flex: 1 }}>

        <h2>வணக்கம் {user.name || "Farmer"} 👋</h2>

        <h3>AgroPestro Smart Dashboard</h3>

        <div style={{ marginTop: "30px" }}>

          <p>🌾 AI Crop Monitoring System</p>
          <p>🦠 Disease Detection using Deep Learning</p>
          <p>📊 Yield Prediction using ML</p>
          <p>🌦 Weather Advice</p>
          <p>💰 Market Prices</p>

        </div>

      </div>
    </div>
  );
}