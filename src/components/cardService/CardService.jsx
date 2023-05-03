import * as React from "react";
import {useState, useEffect} from "react";

import Grid from "@mui/material/Grid";
import "./CardService.css";

import embedded from "../../assets/embedded.jpg";
import Artboard1 from "../../assets/Artboard1.svg";
import {Box} from "@mui/system";

const CardService = ({service, index}) => {
 
  
  return (
    <div className={` ${index%2  ==0 ? "container-card-service-white" : "container-card-service-violet"}`}>
      <Grid container className="wrapper-service">
        
        <Grid item xs={12} md={8} className="text">
          <div >
            <div className={` ${index%2  ==0 ? "text-tile-violet" : "text-tile-white"}`}>
              <h1>{service.title}</h1>
            </div>
            <div className="text-description">
              {service.description}
            </div>
          </div>
         
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={service.image}  className="img-fluid" alt="Responsive image" />
        </Grid>
       
      </Grid>
    </div>
  );
};

export default CardService;
