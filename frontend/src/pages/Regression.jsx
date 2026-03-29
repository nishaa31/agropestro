import { useState } from "react";
import axios from "axios";

export default function Regression(){

const [rainfall,setRainfall] = useState("");
const [temperature,setTemperature] = useState("");
const [result,setResult] = useState("");

const predict = async () => {

const res = await axios.post(
"http://localhost:8000/predict-regression",
{
rainfall: rainfall,
temperature: temperature
}
);

setResult(res.data.prediction);

};

return(

<div style={{padding:"40px"}}>

<h2>Crop Yield Regression</h2>

<input
placeholder="Rainfall"
value={rainfall}
onChange={(e)=>setRainfall(e.target.value)}
/>

<br/><br/>

<input
placeholder="Temperature"
value={temperature}
onChange={(e)=>setTemperature(e.target.value)}
/>

<br/><br/>

<button onClick={predict}>
Predict Yield
</button>

<br/><br/>

{result && <h3>Prediction: {result}</h3>}

</div>

)

}