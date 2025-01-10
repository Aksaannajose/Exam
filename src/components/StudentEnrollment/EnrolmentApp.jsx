import React, { useState, useEffect } from 'react';
import {
    getStudents, addStudent, updateStudent, deleteStudent,
    getCourses, addCourse, updateCourse, deleteCourse,
    getEnrollments, addEnrollment, updateEnrollment, deleteEnrollment
} from './ApiService';
import './EnrollmentApp.css';

const EnrollmentApp = () => {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [enrollments, setEnrollments] = useState([]);
    const [newStudent, setNewStudent] = useState({ name: '', email: '' });
    const [newCourse, setNewCourse] = useState({ title: '', description: '' });
    const [newEnrollment, setNewEnrollment] = useState({ userid: '', Courseid: '', enrollmentdate: '' });
    const [editingStudent, setEditingStudent] = useState(null);
    const [editingCourse, setEditingCourse] = useState(null);
    const [editingEnrollment, setEditingEnrollment] = useState(null);

    useEffect(() => {
        fetchStudents();
        fetchCourses();
        fetchEnrollments();
    }, []);

    const fetchStudents = async () => {
        const response = await getStudents();
        setStudents(response.data);
    };

    const fetchCourses = async () => {
        const response = await getCourses();
        setCourses(response.data);
    };

    const fetchEnrollments = async () => {
        const response = await getEnrollments();
        setEnrollments(response.data);
    };

    const handleAddStudent = async () => {
        await addStudent(newStudent);
        setNewStudent({ name: '', email: '' });
        fetchStudents();
    };

    const handleUpdateStudent = async (id) => {
        await updateStudent(id, newStudent);
        setNewStudent({ name: '', email: '' });
        setEditingStudent(null);
        fetchStudents();
    };

    const handleDeleteStudent = async (id) => {
        await deleteStudent(id);
        fetchStudents();
    };

    const handleAddCourse = async () => {
        await addCourse(newCourse);
        setNewCourse({ title: '', description: '' });
        fetchCourses();
    };

    const handleUpdateCourse = async (id) => {
        await updateCourse(id, newCourse);
        setNewCourse({ title: '', description: '' });
        setEditingCourse(null);
        fetchCourses();
    };

    const handleDeleteCourse = async (id) => {
        await deleteCourse(id);
        fetchCourses();
    };

    const handleAddEnrollment = async () => {
        await addEnrollment(newEnrollment);
        setNewEnrollment({ userid: '', Courseid: '', enrollmentdate: '' });
        fetchEnrollments();
    };

    const handleUpdateEnrollment = async (id) => {
        await updateEnrollment(id, newEnrollment);
        setNewEnrollment({ userid: '', Courseid: '', enrollmentdate: '' });
        setEditingEnrollment(null);
        fetchEnrollments();
    };

    const handleDeleteEnrollment = async (id) => {
        await deleteEnrollment(id);
        fetchEnrollments();
    };

    return (
        <div className="container">
            <h1>Student Enrollment Management</h1>

            {/* Students Section */}
            <div className="section">
                <h2>Students</h2>
                <input type="text" placeholder="Name" value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} />
                <input type="text" placeholder="Email" value={newStudent.email} onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })} />
                <button onClick={editingStudent ? () => handleUpdateStudent(editingStudent) : handleAddStudent}>{editingStudent ? 'Update' : 'Add'} Student</button>
                <ul>
                    {students.map((student) => (
                        <li key={student.userid}>
                            {student.name} - {student.email}
                            <button onClick={() => {
                                setNewStudent(student);
                                setEditingStudent(student.userid);
                            }}>Edit</button>
                            <button onClick={() => handleDeleteStudent(student.userid)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Courses Section */}
            <div className="section">
                <h2>Courses</h2>
                <input type="text" placeholder="Title" value={newCourse.title} onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })} />
                <input type="text" placeholder="Description" value={newCourse.description} onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })} />
                <button onClick={editingCourse ? () => handleUpdateCourse(editingCourse) : handleAddCourse}>{editingCourse ? 'Update' : 'Add'} Course</button>
                <ul>
                    {courses.map((course) => (
                        <li key={course.Courseid}>
                            {course.title} - {course.description}
                            <button onClick={() => {
                                setNewCourse(course);
                                setEditingCourse(course.Courseid);
                            }}>Edit</button>
                            <button onClick={() => handleDeleteCourse(course.Courseid)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Enrollments Section */}
            <div className="section">
                <h2>Enrollments</h2>
                <input type="text" placeholder="User ID" value={newEnrollment.userid} onChange={(e) => setNewEnrollment({ ...newEnrollment, userid: e.target.value })} />
                <input type="text" placeholder="Course ID" value={newEnrollment.Courseid} onChange={(e) => setNewEnrollment({ ...newEnrollment, Courseid: e.target.value })} />
                <input type="text" placeholder="Enrollment Date" value={newEnrollment.enrollmentdate} onChange={(e) => setNewEnrollment({ ...newEnrollment, enrollmentdate: e.target.value })} />
                <button onClick={editingEnrollment ? () => handleUpdateEnrollment(editingEnrollment) : handleAddEnrollment}>{editingEnrollment ? 'Update' : 'Add'} Enrollment</button>
                <ul>
                    {enrollments.map((enrollment) => (
                        <li key={enrollment.Enrollmentid}>
                            User: {enrollment.userid} - Course: {enrollment.Courseid} - Date: {enrollment.enrollmentdate}
                            <button onClick={() => {
                                setNewEnrollment(enrollment);
                                setEditingEnrollment(enrollment.Enrollmentid);
                            }}>Edit</button>
                            <button onClick={() => handleDeleteEnrollment(enrollment.Enrollmentid)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default EnrollmentApp;
