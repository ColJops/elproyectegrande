import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LogIn from "./components/LogIn";
import Care from "./components/Care";
import {Home} from "./components/Home";
import Train from "./components/Train";
import {SignUp} from "./components/SignUp";
import Logged from "./components/Logged";

import {AuthProvider} from "./Authenticate/AuthContext";
import UserProfileEdit from "./components/UserProfileEdit";
import DropDownList from "./components/DropDownList/DropDownList";
import SelectComponent from "./components/DropDownList/SelectComponent";
import AddDogCard from "./components/DogCards/AddDogCard";
import DogsCards from "./components/DogCards/DogsCards";
import Dog from "./components/DogCards/Dog";
import Levels from "./components/Training/Levels";
import Collapsible from "./components/Training/Collapsible";
import Lesson from "./components/Training/Lesson";
import Slider from "./components/Training/Slider/Slider";
import Lessons from "./components/Training/Lessons";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <NavBar/>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="train/*" element={<Train />} />
          <Route path="care/*" element={<Care />} />
          <Route path="login/*" element={<LogIn />} />
          <Route path="signup/*" element={<SignUp />} />
          <Route path="logged/*" element={<Logged />} />
          <Route path="signed/*" element={<SignUp />} />
          <Route path="userprofile-edit/*" element={<UserProfileEdit />} />
          <Route path="dropdownlist/*" element={<DropDownList />} />
          <Route path="selectcomponent/*" element={<SelectComponent />} />
          <Route path="adddogcard/*" element={<AddDogCard />} />
          <Route path="dogscards/*" element={<DogsCards />} />
          <Route path="dog/*" element={<Dog />} />
          <Route path="levels/*" element={<Levels />} />
          <Route path="collapsible/*" element={<Collapsible />} />
          <Route path="lesson/*" element={<Lesson />} />
          <Route path="slider/*" element={<Slider />} />
          <Route path="lessons/*" element={<Lessons />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
