import Sidebar from "../components/Sidebar";

export default function FarmDetails() {

  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ padding: "30px", flex: 1 }}>

        <h2>Farm Details</h2>

        <input placeholder="Crop Type" />
        <br /><br />

        <input placeholder="Land Area (acres)" />
        <br /><br />

        <input placeholder="Soil Type" />
        <br /><br />

        <button>Save</button>

      </div>
    </div>
  );
}