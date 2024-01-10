import React, { useState } from "react";
import axios from "axios";
import "./LoginRegistrationPage.css";

import user_icon from "../../Assets/person.png";
import email_icon from "../../Assets/email.png";
import password_icon from "../../Assets/password.png";

const RegistrationPage = () => {
  const [action, setAction] = useState("Register");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (action === "Register") {
        await axios.post("http://localhost:5001/api/users/register", formData);
        setSuccessMessage("Registration successful!");
      } else {
        const response = await axios.post(
          "http://localhost:5001/api/users/login",
          formData
        );
        setSuccessMessage("Login successful!");
        console.log("Access Token:", response.data.accessToken);
      }
    } catch (error) {
      console.error("Error:", error.response.data.error);
    }
  };

  return (
    <div className="container">
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              name="username"
              placeholder="Name"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div
        className="forget-password"
        onClick={() => {
          setAction(action === "Login" ? "Register" : "Login");
        }}
      >
        <span>{action === "Login" ? "Register" : "Login"}</span>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleSubmit}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
