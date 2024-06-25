import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Images from "./components/data/Images";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> <AppContent />
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  return (
    <div className="container">
      <div className="content">
        <Routes>
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/i" element={<Images />} />
          {/* Diğer rotalarınızı buraya ekleyebilirsiniz */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
