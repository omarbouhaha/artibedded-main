import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/404";
import Jobs from "./pages/Jobs";
import Service from "./pages/404";
import Layout from "./components/layout/Layout";
import JobInfo from "./pages/JobInfo";

function App() {
  return (
    <div style={{margin:'0'}}>
   <Layout>
   
    
      <Routes >
      
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/career" element={<Jobs/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/jobInfo/:id" element={<JobInfo/>} />
        
      </Routes>
    </Layout>
   

    </div>
  );
}

export default App;
