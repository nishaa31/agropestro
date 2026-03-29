import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

import { Menu, Home, Leaf, TrendingUp, CloudSun, Store, User, LogOut} from "lucide-react";

export default function Sidebar(){
const [showProfile, setShowProfile] = useState(false);
const userData = JSON.parse(localStorage.getItem("agropestro_user"));
const userName = userData?.name || "Farmer";
const [collapsed, setCollapsed] = useState(false);
return(

<div className={collapsed ? "sidebar collapsed" : "sidebar"}>

<div className="top-section">
<button className="menu-btn" onClick={()=>setCollapsed(!collapsed)}>
<Menu size={22}/>
</button>

{!collapsed && <h2 className="logo">AgroPestro</h2>}
</div>

<nav>

<NavLink to="/" className="nav-item">
<Home size={20}/>
{!collapsed && <span>Home</span>}
</NavLink>

<NavLink to="/disease" className="nav-item">
<Leaf size={20}/>
{!collapsed && <span>Scan Crop</span>}
</NavLink>

<NavLink to="/yield" className="nav-item">
<TrendingUp size={20}/>
{!collapsed && <span>Yield</span>}
</NavLink>

<NavLink to="/weather" className="nav-item">
<CloudSun size={20}/>
{!collapsed && <span>Weather</span>}
</NavLink>

<NavLink to="/market" className="nav-item">
<Store size={20}/>
{!collapsed && <span>Market</span>}
</NavLink>

</nav>

<div className="user-section">

<div 
className="user-info"
onClick={()=>setShowProfile(!showProfile)}
>
<User size={18} />
{!collapsed && <span>{userName}</span>}
</div>

{showProfile && !collapsed && (
<div className="profile-popup">
<p><b>Name:</b> {userData?.name}</p>
<p><b>Phone:</b> {userData?.phone}</p>
<p><b>Location:</b> {userData?.location}</p>
</div>
)}

<div 
className="logout-btn"
onClick={()=>{
localStorage.removeItem("agropestro_user");
window.location.href="/login";
}}
>
<LogOut size={18} /> {!collapsed && "Logout"}
</div>

</div>


</div>

)
}