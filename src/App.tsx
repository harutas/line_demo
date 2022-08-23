import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./context/authContext";
// import { getAuth } from "firebase/auth";
// import { onAuthStateChanged } from "firebase/auth";
import HomePage from "./pages/HomePage";
import Line from "./pages/Line";

function App() {
  const { authState } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {authState.authIsReady && (
        <Routes>
          <Route path="/" element={!authState.user ? <HomePage /> : <Navigate to="/line" />} />
          <Route path="/line" element={authState.user ? <Line /> : <Navigate to="/" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
