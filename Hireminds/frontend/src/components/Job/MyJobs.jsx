import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";

const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [editingMode, setEditingMode] = useState(null);
  const { isAuthorized, user } = useContext(Context);

  const navigateTo = useNavigate();
  //Fetching all jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/job/getmyjobs`,
          { withCredentials: true }
        );
        setMyJobs(data.myJobs);
      } catch (error) {
        toast.error(error.response.data.message);
        setMyJobs([]);
      }
    };
    fetchJobs();
  }, []);
  if (!isAuthorized || (user && user.role !== "Employer")) {
    navigateTo("/");
  }

  //Function For Enabling Editing Mode
  const handleEnableEdit = (jobId) => {
    //Here We Are Giving Id in setEditingMode because We want to enable only that job whose ID has been send.
    setEditingMode(jobId);
  };

  //Function For Disabling Editing Mode
  const handleDisableEdit = () => {
    setEditingMode(null);
  };

  //Function For Updating The Job
  const handleUpdateJob = async (jobId) => {
    const updatedJob = myJobs.find((job) => job._id === jobId);
    await axios
      .put(`${import.meta.env.VITE_API_URL}/job/update/${jobId}`, updatedJob, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setEditingMode(null);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  //Function For Deleting Job
  const handleDeleteJob = async (jobId) => {
    await axios
      .delete(`${import.meta.env.VITE_API_URL}/job/delete/${jobId}`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setMyJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handleInputChange = (jobId, field, value) => {
    // Update the job object in the jobs state with the new value
    setMyJobs((prevJobs) =>
      prevJobs.map((job) =>
        job._id === jobId ? { ...job, [field]: value } : job
      )
    );
  };

  return (
    <>
      <div className="myJobs page">
        <div className="container">
          <h1 className="section-title" style={{ marginBottom: '3rem' }}>Your Posted Jobs</h1>
          {myJobs.length > 0 ? (
            <>
              <div className="banner">
                <div className="grid-container" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                  {myJobs.map((element) => (
                    <div className="card" key={element._id} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div className="content" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div className="short_fields" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          <div>
                            <span style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Title:</span>
                            <input
                              type="text"
                              className="form-control"
                              disabled={
                                editingMode !== element._id ? true : false
                              }
                              value={element.title}
                              onChange={(e) =>
                                handleInputChange(
                                  element._id,
                                  "title",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                              <span style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Country:</span>
                              <input
                                type="text"
                                className="form-control"
                                disabled={
                                  editingMode !== element._id ? true : false
                                }
                                value={element.country}
                                onChange={(e) =>
                                  handleInputChange(
                                    element._id,
                                    "country",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div>
                              <span style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>City:</span>
                              <input
                                type="text"
                                className="form-control"
                                disabled={
                                  editingMode !== element._id ? true : false
                                }
                                value={element.city}
                                onChange={(e) =>
                                  handleInputChange(
                                    element._id,
                                    "city",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                          <div>
                            <span style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Category:</span>
                            <select
                              value={element.category}
                              className="form-control"
                              onChange={(e) =>
                                handleInputChange(
                                  element._id,
                                  "category",
                                  e.target.value
                                )
                              }
                              disabled={
                                editingMode !== element._id ? true : false
                              }
                            >
                              <option value="Graphics & Design">
                                Graphics & Design
                              </option>
                              <option value="Mobile App Development">
                                Mobile App Development
                              </option>
                              <option value="Frontend Web Development">
                                Frontend Web Development
                              </option>
                              <option value="MERN Stack Development">
                                MERN STACK Development
                              </option>
                              <option value="Account & Finance">
                                Account & Finance
                              </option>
                              <option value="Artificial Intelligence">
                                Artificial Intelligence
                              </option>
                              <option value="Video Animation">
                                Video Animation
                              </option>
                              <option value="MEAN Stack Development">
                                MEAN STACK Development
                              </option>
                              <option value="MEVN Stack Development">
                                MEVN STACK Development
                              </option>
                              <option value="Data Entry Operator">
                                Data Entry Operator
                              </option>
                            </select>
                          </div>
                          <div>
                            <span style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                              Salary:{" "}
                            </span>
                            {element.fixedSalary ? (
                              <input
                                type="number"
                                className="form-control"
                                disabled={
                                  editingMode !== element._id ? true : false
                                }
                                value={element.fixedSalary}
                                onChange={(e) =>
                                  handleInputChange(
                                    element._id,
                                    "fixedSalary",
                                    e.target.value
                                  )
                                }
                              />
                            ) : (
                              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <input
                                  type="number"
                                  className="form-control"
                                  disabled={
                                    editingMode !== element._id ? true : false
                                  }
                                  value={element.salaryFrom}
                                  onChange={(e) =>
                                    handleInputChange(
                                      element._id,
                                      "salaryFrom",
                                      e.target.value
                                    )
                                  }
                                />
                                <input
                                  type="number"
                                  className="form-control"
                                  disabled={
                                    editingMode !== element._id ? true : false
                                  }
                                  value={element.salaryTo}
                                  onChange={(e) =>
                                    handleInputChange(
                                      element._id,
                                      "salaryTo",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            )}
                          </div>
                          <div>
                            <span style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Expired:</span>
                            <select
                              value={element.expired}
                              className="form-control"
                              onChange={(e) =>
                                handleInputChange(
                                  element._id,
                                  "expired",
                                  e.target.value
                                )
                              }
                              disabled={
                                editingMode !== element._id ? true : false
                              }
                            >
                              <option value={true}>TRUE</option>
                              <option value={false}>FALSE</option>
                            </select>
                          </div>
                        </div>
                        <div className="long_field" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          <div>
                            <span style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Description:</span>{" "}
                            <textarea
                              rows={5}
                              value={element.description}
                              className="form-control"
                              disabled={
                                editingMode !== element._id ? true : false
                              }
                              onChange={(e) =>
                                handleInputChange(
                                  element._id,
                                  "description",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          <div>
                            <span style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Location: </span>
                            <textarea
                              value={element.location}
                              rows={5}
                              className="form-control"
                              disabled={
                                editingMode !== element._id ? true : false
                              }
                              onChange={(e) =>
                                handleInputChange(
                                  element._id,
                                  "location",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {/* Out Of Content Class */}
                      <div className="button_wrapper" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <div className="edit_btn_wrapper" style={{ flex: 1 }}>
                          {editingMode === element._id ? (
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              <button
                                onClick={() => handleUpdateJob(element._id)}
                                className="btn btn-primary"
                                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                              >
                                <FaCheck />
                              </button>
                              <button
                                onClick={() => handleDisableEdit()}
                                className="btn btn-outline"
                                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', borderColor: 'var(--danger-color)', color: 'var(--danger-color)' }}
                              >
                                <RxCross2 />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => handleEnableEdit(element._id)}
                              className="btn btn-outline"
                              style={{ width: '100%' }}
                            >
                              Edit
                            </button>
                          )}
                        </div>
                        <button
                          onClick={() => handleDeleteJob(element._id)}
                          className="btn btn-primary"
                          style={{ flex: 1, backgroundColor: 'var(--danger-color)' }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p>
              You've not posted any job or may be you deleted all of your jobs!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MyJobs;
