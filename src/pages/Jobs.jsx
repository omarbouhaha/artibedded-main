import React from "react";
import CardJob from "../components/job/CardJob";
import "./Jobs.css";
import axios from "axios";
import {useState, useEffect} from "react";
import {Grid} from "@mui/material";
import ReactPlayer from "react-player";
import Video from "../assets/recrutement.mp4";
import Footer from "../components/layout/Footer";
const Jobs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/jobs")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor:"#f8f0f4"
      }}
    >
      <div className="header-jobs">
        <div className="left-header-jobs"><p style={{ textAlign: 'center' }}>
        Join our team and build the future with us. We offer exciting opportunities to work on cutting-edge projects in a dynamic and collaborative environment. Apply now and become a part of our mission to make a difference in the world!
        
      </p>
      <p> <a href="mailto:contact@artibedded.com">reach out !</a>
</p>
      </div>
        <div className="right-header-jobs">
         
        </div>
      </div>

      <Grid
        container
        spacing={5}
        style={{justifyContent: "center", marginBottom: "5%"}}
      >
        {data.map((job) => (
          <Grid item md={5} xs={12} textAlign="center">
            <CardJob key={job._id} job={job} />
          </Grid>
        ))}
      </Grid>
      <div style={{position: "relative", bottom: "0", right: "0", left: "0"}}>
        <Footer />
      </div>
    </div>
  );
};

export default Jobs;
