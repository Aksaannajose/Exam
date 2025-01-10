import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">Student Enrollment System</a>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#students" className="nav-link">Students</a>
                </li>
                <li className="nav-item">
                    <a href="#courses" className="nav-link">Courses</a>
                </li>
                <li className="nav-item">
                    <a href="#enrollments" className="nav-link">Enrollments</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
