import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/login";
import Player from "./pages/Player/player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const Navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("User is logged in");
        Navigate("/");
      } else {
        console.log("User is logged out");
        Navigate("/login");
      }
    })
  }, [])

  return (
    <div>
              <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
