import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home"
import Layout from "./pages/Layout";
import Project from "./pages/Project";
import Feature from './pages/Feature';
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="project" element={<Project/>}/>
      <Route path="feature" element={<Feature/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </>
);
