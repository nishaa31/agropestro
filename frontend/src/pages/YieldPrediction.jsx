import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { predictYield } from "../services/api";

export default function YieldPrediction() {

  const [form, setForm] = useState({});
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {

    const res = await predictYield(form);

    setResult(res);
  };

  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ padding: "30px", flex: 1 }}>

        <h2>Yield Prediction</h2>

        <input placeholder="Crop Type"
          onChange={(e) => setForm({ ...form, crop_type: e.target.value })}
        />

        <br /><br />

        <input placeholder="Soil Type"
          onChange={(e) => setForm({ ...form, soil_type: e.target.value })}
        />

        <br /><br />

        <button onClick={handleSubmit}>
          Predict Yield
        </button>

        {result && (
          <h3>Predicted Yield: {result.predicted_yield}</h3>
        )}

      </div>
    </div>
  );
}