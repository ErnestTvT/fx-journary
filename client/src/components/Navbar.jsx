import { Link, useNavigate, useLocation } from 'react-router-dom'
import { LogOut, Plus, BarChart3, History, User } from 'lucide-react'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    navigate('/login')
  }

  const isActive = (path) => location.pathname === path ? 'text-accent' : 'text-gray-400 hover:text-white'

  return (
    <nav className="bg-dark-card border-b border-dark-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/dashboard" className="text-2xl font-bold text-accent">
          FX JOURNAL
        </Link>
        
        <div className="flex items-center gap-8">
          <Link to="/dashboard" className={`flex items-center gap-2 ${isActive('/dashboard')}`}>
            <BarChart3 size={20} />
            Dashboard
          </Link>
          <Link to="/trades" className={`flex items-center gap-2 ${isActive('/trades')}`}>
            <History size={20} />
            History
          </Link>
          <Link to="/add-trade" className="btn-primary flex items-center gap-2">
            <Plus size={18} />
            New Trade
          </Link>
          <Link to="/profile" className={`flex items-center gap-2 ${isActive('/profile')}`}>
            <User size={20} />
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-400 hover:text-red-400"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
