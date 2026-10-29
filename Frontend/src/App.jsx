
import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      "Login screen is ready. Connect the backend to authenticate your account."
    );
  }

  return (
    <main className="portal">
      <section className="brand-panel">
        <div className="brand-content">
          <div className="company-logo">
            <img
              src="/amagen-logo.jpeg"
              alt="Amagen Pharma Private Limited"
            />
          </div>

          <div className="brand-divider" />

          <p className="eyebrow">INTERNAL WORKSPACE</p>

          <h1>
            One workplace.
            <br />
            <span>Better teamwork.</span>
          </h1>

          <p className="brand-description">
            A central workspace for managing employees,
            attendance, leave requests and daily tasks
            across Amagen Pharma.
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-icon">01</span>
              <div>
                <h3>People &amp; teams</h3>
                <p>Employee and department management</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-icon">02</span>
              <div>
                <h3>Daily operations</h3>
                <p>Attendance, leave and task tracking</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-icon">03</span>
              <div>
                <h3>One shared workspace</h3>
                <p>Keep work organised in one place</p>
              </div>
            </div>
          </div>
        </div>

        <div className="brand-footer">
          <span>AMAGEN PHARMA PRIVATE LIMITED</span>
          <span>EMPLOYEE WORKSPACE</span>
        </div>
      </section>

      <section className="login-panel">
        <div className="login-container">
          <div className="mobile-logo">
            <img
              src="/amagen-logo.jpeg"
              alt="Amagen Pharma"
            />
          </div>

          <div className="login-heading">
            <div className="welcome-label">
              <span className="status-dot" />
              EMPLOYEE ACCESS
            </div>

            <h2>Welcome back</h2>

            <p>
              Sign in with your company account to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Work email</label>

              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMessage("");
                }}
                autoComplete="username"
                required
              />
            </div>

            <div className="form-group">
              <div className="password-label">
                <label htmlFor="password">Password</label>
              </div>

              <div className="password-field">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setMessage("");
                  }}
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <label className="remember-option">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />
              <span>Remember me on this device</span>
            </label>

            <button className="sign-in-button" type="submit">
              Sign in
              <span aria-hidden="true">→</span>
            </button>

            {message && (
              <p className="form-message" role="status">
                {message}
              </p>
            )}
          </form>

          <div className="security-note">
            <span className="lock-icon" aria-hidden="true">◇</span>
            <p>
              Company workspace for authorised employees.
              Use your assigned account to sign in.
            </p>
          </div>

          <div className="login-bottom">
            <span>Phase 1 · Employee Management System</span>
            <span>© Amagen Pharma</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
