import { useState } from "react";
import axios from "axios";

export default function TimeSeries(){

const [year,setYear] = useState("");
const [result,setResult] = useState("");

const predict = async () => {

const res = await axios.post(
"http://localhost:8000/predict-timeseries",
{
year: year
}
);

setResult(res.data.forecast);

};

return(

<div style={{padding:"40px"}}>

<h2>Time Series Forecast</h2>

<input
placeholder="Enter Year"
value={year}
onChange={(e)=>setYear(e.target.value)}
/>

<br/><br/>

<button onClick={predict}>
Forecast Yield
</button>

<br/><br/>

{result && <h3>Forecast: {result}</h3>}

</div>

)

}