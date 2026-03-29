import { useNavigate, useLocation } from 'react-router-dom'
import './Sidebar.css'

const navItems = [
  {
    path: '/',
    label: 'Dashboard',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    path: '/disease',
    label: 'Disease Detection',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
    badge: 'alert',
  },
  {
    path: '/yield',
    label: 'Yield Prediction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
]

export default function Sidebar() {
  const navigate  = useNavigate()
  const location  = useLocation()
  const user      = JSON.parse(localStorage.getItem('agropestro_user') || '{}')

  const handleLogout = () => {
    localStorage.removeItem('agropestro_user')
    navigate('/login')
  }

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-name">AgroPestro</div>
        <div className="logo-tag">Smart Wheat Intelligence</div>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        <div className="nav-section-label">Main</div>
        {navItems.map((item) => (
          <div
            key={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {item.badge && <span className="nav-badge">!</span>}
          </div>
        ))}
      </nav>

      {/* User area */}
      <div className="sidebar-user">
        <div className="user-avatar">
          {user.name ? user.name.charAt(0).toUpperCase() : 'F'}
        </div>
        <div className="user-info">
          <div className="user-name">{user.name || 'Farmer'}</div>
          <div className="user-loc">{user.location || 'Tamil Nadu'}</div>
        </div>
        <button className="logout-btn" onClick={handleLogout} title="Logout">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </button>
      </div>
    </aside>
  )
}
