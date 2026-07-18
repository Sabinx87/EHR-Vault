import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import TextField from '../components/ui/TextField.jsx'
import PasswordField from '../components/ui/PasswordField.jsx'
import PulseLine from '../components/auth/PulseLine.jsx'
import './login.css'

export default function Login() {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    // No backend yet — this just proves the navigation flow.
    // Real validation + auth get wired in once the API exists.
    navigate('/dashboard')
  }

  return (
    <div className="login">
      <aside className="login-brand">
        <div className="login-brand-content">
          <span className="login-logo">EHR Vault</span>
          <PulseLine />
          <p className="login-tagline">
            Secure access to patient records, built around trust and care.
          </p>
        </div>
      </aside>

      <main className="login-main">
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="login-form-header">
            <h1>Welcome back</h1>
            <p>Sign in to continue to your dashboard.</p>
          </div>

          <TextField
            id="email"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
          />

          <PasswordField
            id="password"
            label="Password"
            name="password"
            autoComplete="current-password"
            placeholder="Enter your password"
          />

          <div className="login-form-row">
            <label className="login-remember">
              <input type="checkbox" name="remember" />
              Remember me
            </label>
            <a href="#" className="login-forgot">
              Forgot password?
            </a>
          </div>

          <Button type="submit">Sign in</Button>

          <p className="login-switch">
            Don&apos;t have an account? <a href="#">Create one</a>
          </p>
        </form>
      </main>
    </div>
  )
}