import React, { useState } from "react";
import "../assets/signin.css";

export default function Signin() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    userType: "",
    secretKey: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.userType === "Admin" && formData.secretKey !== "ADMIN") {
      alert("Invalid Admin");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.status === "ok") {
        alert("Registration Successful");
      } else {
        alert("Registration Failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration Failed: " + error.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <video autoPlay loop muted className="background-video">
        <source src="Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Register</h3>

          <div className="radio-group">
            <label>Register As:</label>
            <label>
              <input
                type="radio"
                name="userType"
                value="User"
                onChange={handleChange}
              />
              User
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="Admin"
                onChange={handleChange}
              />
              Admin
            </label>
          </div>

          {formData.userType === "Admin" && (
            <div className="form-group">
              <label>Secret Key</label>
              <input
                type="text"
                name="secretKey"
                className="form-control"
                placeholder="Secret Key"
                onChange={handleChange}
              />
            </div>
          )}

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              name="fname"
              className="form-control"
              placeholder="First name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              name="lname"
              className="form-control"
              placeholder="Last name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>

          <p className="forgot-password text-right">
            Already registered <a href="/login">Login?</a>
          </p>
        </form>
      </div>
    </div>
  );
}