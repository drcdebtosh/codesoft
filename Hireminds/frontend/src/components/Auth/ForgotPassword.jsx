import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/user/password/forgot`,
                { email },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <section className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <div className="logo" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
                        Hire<span>Minds</span>
                    </div>
                    <h3>Forgot Password</h3>
                    <p>Enter your email to receive a reset link</p>
                </div>
                <form onSubmit={handleForgotPassword}>
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="email@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
                        Send Reset Link
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ForgotPassword;
