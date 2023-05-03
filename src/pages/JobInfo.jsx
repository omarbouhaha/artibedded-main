import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import LayoutForm from "../components/multiStepForm/LayoutForm";
import axios from "axios";
import Grid from "@mui/material/Grid";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import "./JobInfo.css";
import Footer from "../components/layout/Footer";
const JobForm = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/jobs/${id}`)
      .then((res) => {
        setData(res.data);
        
      })
      .catch((err) => {
        setError((prev)=>!prev);
      });
      window.scroll(0,0); 
  }, []);

  const {id} = useParams();
  return (
    <div >
      {!error && <div> <div className="job-info mt-5 container">
        <Grid container spacing={1}>
          <Grid item md={12} xs={12}>
            <div className="title">
              <p>{data.title}</p>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="experience ">
              <WorkHistoryOutlinedIcon />
              <p>Experience : {data.experience}</p>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="degree">
              <SchoolOutlinedIcon />
              <p>Degree required : {data.degree}</p>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="type ">
              <BookOutlinedIcon />
              <p>Contract type : {data.type}</p>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="location ">
              <LocationOnOutlinedIcon />
              <p>Location : {data.location}</p>
            </div>
          </Grid>
          <Grid item md={12} xs={12}>
            <div className="description ml-3">
              Description : {data.description}
            </div>
          </Grid>
        </Grid>
      </div>
      <LayoutForm /></div> }
      {error && <div style={{height:"80vh", color:"red", display:"flex", justifyContent:"center", alignItems:"center"  }}>
        <h1>Page not found error 400 ! </h1>
        </div>}

     
      <Footer/>
    </div>
  );
};

export default JobForm;
