import "./Contact.css";
//import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Grid} from "@mui/material";
import React, {useState} from "react";
import {LoadingButton} from "@mui/lab";
import GoogleMaps from "simple-react-google-maps"
import SendIcon from "@mui/icons-material/Send";
import Swal from "sweetalert2";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import Footer from '../components/layout/Footer';

export default function Contact() {
  const [data, setData] = useState({object: "Stage"});
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();
  const changeValue = (value) => {
    setValue(value);
    data.phone = value;
  };

  const handleChange = (e) => {
    console.log(data);
    setData({...data, [e.target.name]: e.target.value});
  };
  const OnSubmit = (e) => {
    e.preventDefault();
    setLoading((prev) => !prev);
    axios
      .post("http://localhost:3001/api/mailer/mailcontact", {
        ...data,
      })
      .then((res) => {
        console.log(res);
        setLoading((prev) => !prev);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your message has been sent",
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading((prev) => !prev);
        Swal.fire({
          icon: "error",
          title: "error",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column',minHeight:'90vh', marginTop:"10vh"}}>
      <Container className="mt-5" >
        <Grid container  spacing={3}>
          <Grid item xs={12} md={7}>
            <div className="form container">
              <form onSubmit={OnSubmit}>
                <Grid container spacing={1}>
                  {[
                    {
                      nom: "Nom &Prenom",
                      type: "text",
                      required: true,
                      name: "name",
                    },
                    {
                      nom: "Email",
                      type: "email",
                      required: true,
                      name: "email",
                    },
                    {
                      nom: "Telephone",
                      type: "tel",
                      required: true,
                      name: "phone",
                    },
                    {
                      nom: "Entreprise",
                      type: "text",
                      required: false,
                      name: "entreprise",
                    },
                    {
                      nom: "Fonction",
                      type: "text",
                      required: false,
                      name: "fonction",
                    },
                  ].map((text) => (
                    <Grid item xs={12} md={6}>
                      {text.type == "tel" ? (
                        <>
                          <label htmlFor="exampleInputEmail1">{text.nom}</label>
                          <PhoneInput
                            defaultCountry="TN"
                            type={text.type}
                            name={text.nom}
                            onChange={changeValue}
                            value={value}
                            required={text.required}
                            id={text}
                            className="form-control"
                          />
                        </>
                      ) : (
                        <div className="form-group" key={text.name}>
                          <label htmlFor="exampleInputEmail1">{text.nom}</label>
                          <input
                            onChange={handleChange}
                            name={text.name}
                            type={text.type}
                            required={text.required}
                            className="form-control"
                            id={text}
                          />
                        </div>
                      )}
                    </Grid>
                  ))}
                  <Grid item xs={12} md={6}>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">Objet</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        onChange={handleChange}
                        name="object"
                      >
                        {["Stage", "Information", "Autre"].map((text) => (
                          <option key={text}>{text}</option>
                        ))}
                      </select>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">
                        Example textarea
                      </label>
                      <textarea
                        name="message"
                        onChange={handleChange}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </Grid>
                </Grid>
                <LoadingButton
                  style={{backgroundColor: "#a77bce", margin: "3%"}}
                  endIcon={<SendIcon />}
                  color="primary"
                  type="submit"
                  loading={loading}
                  loadingPosition="end"
                  variant="contained"
                >
                  Next
                </LoadingButton>
              </form>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            
            
              <GoogleMaps
                apiKey={"AIzaSyBXVGjeMeXbFgpFMEl09I48m3JpIMDHmrE"}
                className="map"
                style={{height: "400px", width: "100%", borderRadius: "10px"}}
                zoom={16}
                center={{lat: 34.8359252, lng: 10.754517}}
                markers={{lat: 34.8359252, lng: 10.754517}} //optional
              />
          
          </Grid>
          <Grid item xs={12} md={12}>
          <div className="side-information container">
            <Grid item xs={12} md={6}><p> Phone:</p>
              <p>(+216) 21 621 621</p></Grid>
              <Grid item xs={12} md={6}><p> Address:</p>
              <p> Technology pole of Sfax, Sfax, 3021, TN</p></Grid>

              
              
            </div>
            </Grid>
        </Grid>
       

      </Container> <Footer/>
      </div>
    
  );
}
