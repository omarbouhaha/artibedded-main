import React from "react";
import {Button} from "@mui/material";
import {useState} from "react";
import Swal from "sweetalert2";
import SendIcon from "@mui/icons-material/Send";
import "./UploadCv.css";
import axios from "axios";
import {LoadingButton} from "@mui/lab";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const fileTypes = ["PDF"];
export default function UploadCV({
  handleChangePrev,
  handleChangeNextStep,
  changeForm,
  job,
}) {
  const [loading, setLoading] = useState(false);
  const [errorForm, setErrorForm] = useState("");
  function handleClick() {
    setLoading((prev) => !prev);
  }
  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    const fileType = file.type;

    const fileSize = file.size;
    const regex = /pdf/;

    if (regex.test(fileType)) {
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'Please upload a PDF file" !',
        footer: "",
      });
      e.target.value = "";
      return false;
    }

    if (fileSize > 5000000) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a file less than 5MB !",
        footer: "",
      });
      e.target.value = "";
      return false;
    }

    changeForm({...job, cv: file});

    return true;
  };
  const onSubmit = (e) => {
    setLoading((prev) => !prev);
    e.preventDefault();
    if (!job.cv) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a PDF file !",
        footer: "",
      });
      setLoading((prev) => !prev);
      return false;
    }

    var formData = new FormData();
    formData.append("pdfupload", job.cv);
    formData.append("name", job.name);
    formData.append("email", job.email);
    formData.append("phone", job.phone);
    formData.append("formation", job.formation);
    formData.append("university", job.university);
    formData.append("degree", job.degree);
    formData.append("motivation", job.motivation);
    formData.append("idJob", job.idJob);

    axios({
      method: "post",
      url: "http://localhost:3001/api/mailer/form",
      data: formData,
      headers: {"Content-Type": "multipart/form-data"},
    })
      .then(function (response) {
        console.log(response.data);
        axios
          .post("http://localhost:3001/api/mailer/mailjob", response.data)
          .then((res) => {
            setLoading((prev) => !prev);
            handleChangeNextStep();
          })
          .catch(function (error) {
            setLoading((prev) => !prev);
          });
      })
      .catch(function (response) {
        //handle error
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `${response.response.data}`,
          footer: "",
        });
        setLoading((prev) => !prev);
      });
  };
  return (
    <div className="container-upload-file mt-3  ">
     
          <form onSubmit={onSubmit} className="wrapper-upload-file">
           
            <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around", height:"35%"}}>
            <h2 className="title-cv-upload">Put your CV down below</h2>
              <input
                type="file"
                accept=".pdf"
                multiple={false}
                onChange={handleChangeFile}
                className="form-control"
                id="customFile"
                name="pdfupload"
              />
            </div>
            <div className="button-upload-container">
            <Button style={{backgroundColor:"#a77bce"}} variant="contained" onClick={handleChangePrev}  startIcon={<KeyboardArrowLeftIcon style={{fontSize:"200%"}}/>}> 
              Prev
            </Button>
            <LoadingButton
              style={{backgroundColor:"#a77bce"}}
              endIcon={<SendIcon />}
              color="primary"
              type="submit"
              loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              Send
            </LoadingButton>
            </div>
          </form>
        </div>
     
  );
}
