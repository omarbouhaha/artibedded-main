import { Grid } from '@mui/material'
import React from 'react'
import "./cardAbout.css"
const CardAbout = ({person}) => {
  return (
    <Grid container>
       <Grid item xs={12} sm={6} md={6} lg={6} className="card-about-container" >
         <img src={person.img} className="img-card-about  img-fluid" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className="text-about" >
           {person.nomPrenom}
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className="text-about" >
        {person.job}
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} >
       
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} >
       
        </Grid>
      </Grid>

  )
}

export default CardAbout