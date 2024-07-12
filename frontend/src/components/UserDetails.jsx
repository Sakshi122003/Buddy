import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/UserDetails.css';
import backgroundImage from '../assets/bgg.jpg'; // Make sure this path is correct

const UserDetails = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate('/login');
        } else {
            fetchUserData(token);
        }
    }, [navigate]);

    const fetchUserData = (token) => {
        fetch("http://localhost:5000/userData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                token: token,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userData");
            if (data.data === "token expired") {
                alert("Token expired login again");
                localStorage.clear();
                navigate('/login');
            } else {
                setUserData(data.data);
            }
        })
        .catch((error) => {
            console.error("Error fetching user data:", error);
            alert("An error occurred while fetching user data");
        });
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    if (!userData) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="user-details-page" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            padding: '20px'
        }}>
            <div className="user-details-container">
                <h1>Welcome, {userData.fname}!</h1>
                <div className="user-info">
                    <p><strong>First Name:</strong> {userData.fname}</p>
                    <p><strong>Last Name:</strong> {userData.lname}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>User Type:</strong> {userData.userType}</p>
                </div>
                <div className="action-buttons">
                    <Link to="/" className="home-btn">Go to Homepage</Link>
                    <Link to="/buy" className="buy-btn">Buy Pets</Link>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;