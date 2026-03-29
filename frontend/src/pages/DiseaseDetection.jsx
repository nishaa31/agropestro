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

const getTamilExplanation = (disease, severity) => {
  if(!disease) return "";

  const name = disease.replaceAll("_"," ");

  if(severity === "High"){
    return `⚠️ இந்த ${name} நோய் அதிகமாக உள்ளது. உடனே சிகிச்சை செய்யவும்.`;
  }
  if(severity === "Medium"){
    return `⚠️ இந்த ${name} நோய் நடுத்தரமாக உள்ளது. கவனமாக பராமரிக்கவும்.`;
  }
  return `✅ உங்கள் பயிர் நல்ல நிலையில் உள்ளது அல்லது குறைந்த பாதிப்பு மட்டுமே உள்ளது.`;
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

<h1>🌿 Scan Your Crop</h1>

<div className="upload-box">
  <input type="file" onChange={handleUpload}/>
  <button disabled={!image} onClick={predict}>Analyze</button>
</div>

{preview && (
  <div className="preview">
    <img src={preview} alt="preview"/>
  </div>
)}

{result && (
  <div className="result-card">

    <h2 className="disease-name">
      {result.disease.replaceAll("_"," ").toUpperCase()}
    </h2>

    <p>Confidence: {(result.confidence * 100).toFixed(1)}%</p>

    <p className={`severity ${result.severity.toLowerCase()}`}>
      Severity: {result.severity}
    </p>

    <p className="desc">{result.explanation}</p>

    <div className="treatment">
      <h4>💊 Treatment</h4>
      <p>{result.treatment}</p>
    </div>

    <div className="yield">
      <h4>📉 Yield Impact</h4>
      <p>{result.yield_loss}% loss expected</p>
    </div>
    <p className="tamil">
{getTamilExplanation(result.disease, result.severity)}
</p>

    <div className="top-preds">
      <h4>🔍 Other Possibilities</h4>
      {result.top_predictions.map((p,i)=>(
        <p key={i}>
          {p.disease} → {(p.confidence*100).toFixed(1)}%
        </p>
      ))}
    </div>

  </div>
)}

</div>

)

}