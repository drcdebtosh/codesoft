import React, { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";

const Profile = () => {
    const { isAuthorized, user } = useContext(Context);

    if (!isAuthorized) {
        return <Navigate to={"/login"} />;
    }

    return (
        <section className="profile page">
            <div className="container">
                <div className="section-title">
                    <h2>My Profile</h2>
                    <p>Manage your account details</p>
                </div>
                <div className="card" style={{ maxWidth: "600px", margin: "0 auto" }}>
                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={user.name}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            className="form-control"
                            value={user.email}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="number"
                            className="form-control"
                            value={user.phone}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Role</label>
                        <input
                            type="text"
                            className="form-control"
                            value={user.role}
                            disabled
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
