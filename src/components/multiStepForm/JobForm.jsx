import {Button, Grid} from "@mui/material";
import React, {useState} from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {LoadingButton} from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import "bootstrap/dist/css/bootstrap.min.css";
import "./JobForm.css";
import axios from "axios";
import Swal from "sweetalert2";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {isValidPhoneNumber} from "react-phone-number-input";
const JobForm = ({handleChangeNextStep, changeForm, job}) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();
  const changeValue = (value) => {
    setValue(value);
    job.phone = value;
  };
  console.log(value);

  const handleChange = (input) => (e) => {
    changeForm({...job, [input]: e.target.value});
  };

  const onSubmit = (e) => {
    setLoading((prev) => !prev);
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/mailer/form/verify", {
        email: job.email,
        idJob: job.idJob,
      })
      .then((res) => {
        setLoading((prev) => !prev);
        handleChangeNextStep();
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Your have already submitted in this Job",
          showConfirmButton: false,
          timer: 3000,
        });
        setLoading((prev) => !prev);
      });
  };

  return (
    <div className="form container mt-3">
      <form className="row g-3 needs-validation p-4" onSubmit={onSubmit}>
        <Grid container spacing={1}>
          {[
            {type: "text", name: "Name", required: true,nom:'name'},
            {type: "email", name: "Email", required: true,nom:'email'},
            {type: "phone", name: "Phone", required: true, nom:'phone'},
            {type: "text", name: "Formation", required: false,nom:'formation'},
            {type: "text", name: "University", required: false,nom:'university'},
            {type: "text", name: "Degree", required: false,nom:'degree'},
          ].map((text) => (
            <Grid item xs={12} md={6}>
              {text.type === "phone" ? (
                <div className="form-group" key={text.name}>
                  <label htmlFor="validationTooltip01" className="form-label">
                    {text.name}
                  </label>{" "}
                  <PhoneInput
                    defaultCountry="TN"
                    type={text.type}
                    onChange={changeValue}
                    value={value}
                    name={text.nom}
                    required={text.required}
                    id={text}
                    className="form-control"
                  />
                  <div className="valid-tooltip">Looks good!</div>
                </div>
              ) : (
                <div className="form-group" key={text.name}>
                  <label htmlFor="validationTooltip01" className="form-label">
                    {text.name}
                  </label>{" "}
                  <input
                    type={text.type}
                    onChange={handleChange(text.nom)}
                    name={text.nom}
                    required={text.required}
                    id={text}
                    className="form-control"
                  />
                  <div className="valid-tooltip">Looks good!</div>
                </div>
              )}
            </Grid>
          ))}

          <Grid item xs={12} md={12}>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Motivation</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={handleChange("motivation")}
                name="motivation"
                required
              ></textarea>
            </div>
          </Grid>
          <div className="button-next">
            <LoadingButton
              style={{backgroundColor: "#a77bce"}}
              endIcon={<SendIcon />}
              color="primary"
              type="submit"
              loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              Next
            </LoadingButton>
          </div>
        </Grid>
      </form>
    </div>
  );
};

export default JobForm;
