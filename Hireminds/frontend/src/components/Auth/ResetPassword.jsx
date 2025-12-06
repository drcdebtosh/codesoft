import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(
                `${import.meta.env.VITE_API_URL}/user/password/reset/${token}`,
                { password, confirmPassword },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            toast.success(data.message);
            navigate("/login");
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
                    <h3>Reset Password</h3>
                    <p>Enter your new password below</p>
                </div>
                <form onSubmit={handleResetPassword}>
                    <div className="form-group">
                        <label className="form-label">New Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
                        Reset Password
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ResetPassword;
