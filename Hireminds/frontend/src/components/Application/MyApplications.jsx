import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ResumeModal from "./ResumeModal";

const MyApplications = () => {
  const { user } = useContext(Context);
  const [applications, setApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState("");

  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    try {
      if (user && user.role === "Employer") {
        axios
          .get(`${import.meta.env.VITE_API_URL}/application/employer/getall`, {
            withCredentials: true,
          })
          .then((res) => {
            setApplications(res.data.applications);
          });
      } else {
        axios
          .get(`${import.meta.env.VITE_API_URL}/application/jobseeker/getall`, {
            withCredentials: true,
          })
          .then((res) => {
            setApplications(res.data.applications);
          });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }, [isAuthorized]);

  if (!isAuthorized) {
    navigateTo("/");
  }

  const deleteApplication = (id) => {
    try {
      axios
        .delete(`${import.meta.env.VITE_API_URL}/application/delete/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success(res.data.message);
          setApplications((prevApplication) =>
            prevApplication.filter((application) => application._id !== id)
          );
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const updateApplicationStatus = async (id, status) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/application/status/update/${id}`,
        { status },
        { withCredentials: true }
      );
      toast.success(res.data.message);
      setApplications((prevApplications) =>
        prevApplications.map((app) =>
          app._id === id ? { ...app, status } : app
        )
      );
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const openModal = (imageUrl) => {
    setResumeImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="my_applications page">
      <div className="container">
        <div className="section-title">
          <h2>{user && user.role === "Job Seeker" ? "My Applications" : "Applications From Job Seekers"}</h2>
        </div>
        {applications.length <= 0 ? (
          <h4 style={{ textAlign: 'center' }}>No Applications Found</h4>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {applications.map((element) => {
              return user && user.role === "Job Seeker" ? (
                <JobSeekerCard
                  element={element}
                  key={element._id}
                  deleteApplication={deleteApplication}
                  openModal={openModal}
                />
              ) : (
                <EmployerCard
                  element={element}
                  key={element._id}
                  openModal={openModal}
                  updateApplicationStatus={updateApplicationStatus}
                />
              );
            })}
          </div>
        )}
      </div>
      {modalOpen && (
        <ResumeModal imageUrl={resumeImageUrl} onClose={closeModal} />
      )}
    </section>
  );
};

export default MyApplications;

const JobSeekerCard = ({ element, deleteApplication, openModal }) => {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
      <div className="detail" style={{ flex: 2 }}>
        <p><span>Name:</span> {element.name}</p>
        <p><span>Email:</span> {element.email}</p>
        <p><span>Phone:</span> {element.phone}</p>
        <p><span>Address:</span> {element.address}</p>
        <p><span>CoverLetter:</span> {element.coverLetter}</p>
        <p>
          <span>Status:</span>
          <span style={{
            fontWeight: 'bold',
            color: element.status === "Accepted" ? "green" : element.status === "Rejected" ? "red" : "blue",
            marginLeft: '0.5rem'
          }}>
            {element.status}
          </span>
        </p>
      </div>
      <div className="resume" style={{ flex: 1, textAlign: 'center' }}>
        <img
          src={element.resume.url}
          alt="resume"
          onClick={() => openModal(element.resume.url)}
          style={{ width: '150px', height: 'auto', cursor: 'pointer', borderRadius: '8px', border: '1px solid #ddd' }}
        />
      </div>
      <div className="btn_area" style={{ flex: 1, textAlign: 'right' }}>
        <button onClick={() => deleteApplication(element._id)} className="btn btn-primary" style={{ backgroundColor: 'var(--danger-color)' }}>
          Delete Application
        </button>
      </div>
    </div>
  );
};

const EmployerCard = ({ element, openModal, updateApplicationStatus }) => {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
      <div className="detail" style={{ flex: 2 }}>
        <p><span>Name:</span> {element.name}</p>
        <p><span>Email:</span> {element.email}</p>
        <p><span>Phone:</span> {element.phone}</p>
        <p><span>Address:</span> {element.address}</p>
        <p><span>CoverLetter:</span> {element.coverLetter}</p>
      </div>
      <div className="resume" style={{ flex: 1, textAlign: 'center' }}>
        <img
          src={element.resume.url}
          alt="resume"
          onClick={() => openModal(element.resume.url)}
          style={{ width: '150px', height: 'auto', cursor: 'pointer', borderRadius: '8px', border: '1px solid #ddd' }}
        />
      </div>
      <div className="status_area" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontWeight: 'bold' }}>Status:</label>
        <select
          value={element.status}
          onChange={(e) => updateApplicationStatus(element._id, e.target.value)}
          className="form-control"
        >
          <option value="Pending">Pending</option>
          <option value="Reviewed">Reviewed</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
    </div>
  );
};
