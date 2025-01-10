import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState('');

  useEffect(() => {
    axios.get('/api/students')
      .then(response => setStudents(response.data));
  }, []);

  const handleAddStudent = () => {
    axios.post('/api/students', { name: newStudent })
      .then(response => setStudents([...students, response.data]));
    setNewStudent('');
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.studentId}>{student.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newStudent}
        onChange={(e) => setNewStudent(e.target.value)}
        placeholder="Add new student"
      />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};

export default StudentList;
