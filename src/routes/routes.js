// Route.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentForm from '../component/studentForm';
import StudentList from '../component/studentList';

const RoutePath = () => {
  return (
    <Router>
      <Routes>

      <Route path="/list" element={<StudentList />} />
      <Route path="/" element={<StudentForm />} />

        {/* <Route path="/about">
          <StudentList />
        </Route> */}
        {/* <Route path="/">
          <StudentForm />
        </Route> */}
      </Routes>
    </Router>
  );
};

export default RoutePath;
