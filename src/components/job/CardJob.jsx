import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import "./CardJob.css";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import {Link} from "react-router-dom";
const CardJob = ({job}) => {
  return (
    <Grid container flexDirection="column"  justifyContent="space-around" className="container-card-job">
      <Grid item md={12} xs={12} className="title-job">
        {job.title}
      </Grid>
      <Grid item container md={12} xs={12} >
        <Grid item md={3} xs={6}   >
        <p >
          <PinDropOutlinedIcon />
         {job.location}</p> 
        </Grid>
        <Grid item md={3} xs={6}  >
        <p> <ArticleOutlinedIcon />
          {job.type}</p>
        </Grid>
        <Grid item md={3} xs={6} >
        <p><WorkOutlineOutlinedIcon />
          {job.experience}</p>
        </Grid>
        <Grid item md={3} xs={6} >
          <p>
          <WorkspacePremiumOutlinedIcon />
          {job.degree}</p>
        </Grid>
      </Grid>
      <Grid item md={12} xs={12}>
      <Link to={`/jobInfo/${job._id}`}>
        <Button style={{backgroundColor: "#a77bce"}} variant="contained">
          Show more
        </Button>
      </Link>
      </Grid>
    </Grid>
  );
};

export default CardJob;
