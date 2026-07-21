import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import './Dashboard.css'

export default function Dashboard() {
  const navigate = useNavigate()

  function handleLogout() {
    navigate('/login')
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <span className="dashboard-logo">EHR Vault</span>
        <Button variant="secondary" className="dashboard-logout" onClick={handleLogout}>
          Log out
        </Button>
      </header>

      <main className="dashboard-main">
        <h1>Welcome back</h1>
        <p>You're signed in. This is a placeholder — the real dashboard comes later.</p>
      </main>
    </div>
  )
}