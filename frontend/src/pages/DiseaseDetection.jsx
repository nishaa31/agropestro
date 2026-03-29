import { useState } from "react";
import axios from "axios";
import "./DiseaseDetection.css";
export default function DiseaseDetection(){

const [image,setImage] = useState(null);
const [preview,setPreview] = useState(null);
const [result,setResult] = useState(null);

const handleUpload = (e) => {
  const file = e.target.files[0];
  setImage(file);
  setPreview(URL.createObjectURL(file));
};

const predict = async () => {

const formData = new FormData();
formData.append("file",image);

try{
const res = await axios.post(
"http://localhost:8000/predict/disease",
formData
);

setResult(res.data);

}catch(err){
console.log(err);
}

};

return(

<div className="disease-page">

<h1>Disease Detection 🌿</h1>

<div className="upload-section">
  <input type="file" onChange={handleUpload}/>
  <button onClick={predict}>Analyze</button>
</div>

{preview && (
  <div className="preview">
    <img src={preview} alt="preview"/>
  </div>
)}

{result && (
  <div className="result-card">

    <h2 className="disease-name">
      {result.disease.replace("_"," ").toUpperCase()}
    </h2>

    <p className="severity">
      Severity: {result.severity || "Medium"}
    </p>

    <p className="desc">
      {result.description || "Crop disease detected. Needs attention."}
    </p>

    <div className="treatment">
      <h4>Treatment</h4>
      <p>{result.treatment}</p>
    </div>

    <div className="yield">
      <h4>Yield Impact</h4>
      <p>{result.yield_loss}% loss expected</p>
    </div>

  </div>
)}

</div>

)

}