import React from 'react'
import Home from "./home/Home";
import Login from "./components/Login";
 
import {Route,Routes} from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
function App () {
  return (
    <>
      {/*<Home/>
      <Course/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;