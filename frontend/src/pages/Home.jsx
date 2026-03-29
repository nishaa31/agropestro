import { useNavigate } from "react-router-dom";
import { Leaf, TrendingUp, Clock, BarChart3 } from "lucide-react";

export default function Home(){

const navigate = useNavigate();

return(

<div className="home-container">

<h1>Welcome to AgroPestro 🌾</h1>

<p>AI powered farming assistant</p>

<div className="dashboard-cards">

<div className="card" onClick={()=>navigate("/disease")}>
<Leaf size={40}/>
<p>Disease Detection</p>
</div>

<div className="card" onClick={()=>navigate("/regression")}>
<TrendingUp size={40}/>
<p>Yield Regression</p>
</div>

<div className="card" onClick={()=>navigate("/timeseries")}>
<Clock size={40}/>
<p>Time Series</p>
</div>

<div className="card" onClick={()=>navigate("/insights")}>
<BarChart3 size={40}/>
<p>Insights</p>
</div>

</div>

</div>

);
}