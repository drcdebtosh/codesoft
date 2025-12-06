import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  if (isAuthorized) {
    return <Navigate to={'/'} />
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
            Hire<span>Minds</span>
          </div>
          <h3>Welcome Back</h3>
          <p>Login to access your account</p>
        </div>
        <form>
          <div className="form-group">
            <label className="form-label">Login As</label>
            <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="Employer">Employer</option>
              <option value="Job Seeker">Job Seeker</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }} onClick={handleLogin}>
            Login
          </button>
          <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <Link to={"/password/forgot"} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Forgot Password?</Link>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to={"/register"} style={{ color: 'var(--primary-color)', fontWeight: '500' }}>Don't have an account? Register Now</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
