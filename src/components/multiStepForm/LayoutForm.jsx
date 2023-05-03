import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {useState} from "react";
import JobForm from "./JobForm";
import UploadCV from "./UploadCV";
import SuccesPost from "./SuccesPost";
import "./Layout.css";
import {useParams} from "react-router-dom";
const steps = [
  "Form Filling",
  "CV Upload",
  "Done !",
];

const LayoutForm = () => {
  const {id} = useParams();
  const [step, setStep] = useState(0);
  const [nextStep, setNextStep] = useState(step);
  const [prevStep, setPrevStep] = useState(step);
  const [form, setForm] = useState({
    idJob: id,
    name: "",
    email: "",
    phone: "",
    formation: " ",
    university: " ",
    degree: " ",
    motivation: "",
  });
  console.log(form);
  const handleChangeNextStep = () => {
    setStep((prev) => prev + 1);
    setNextStep(step);
  };
  const changeForm = (job) => {
    setForm(job);
  };

  const handleChangePrev = () => {
    setStep((prev) => prev - 1);
    setPrevStep(step);
  };
  return (
    <Box sx={{width: "100%",marginTop:'5%',marginBottom:'5%'}}>
      <Stepper activeStep={step} alternativeLabel  >
        {steps.map((label) => (
          <Step key={label}  sx={{
          '& .MuiStepLabel-root .Mui-completed': {
            color: '#a77bce', // circle color (COMPLETED)
          },
          '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            {
              color: 'grey.500', // Just text label (COMPLETED)
            },
          '& .MuiStepLabel-root .Mui-active': {
            color: '#a77bce', // circle color (ACTIVE)
          },
          '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            {
              color: 'black', // Just text label (ACTIVE)
            },
          '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            fill: 'white', // circle's number (ACTIVE)
          },
        }} >
            <StepLabel >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {
        {
          0: (
            <JobForm
              handleChangeNextStep={handleChangeNextStep}
              changeForm={changeForm}
              job={form}
            />
          ),
          1: (
            <UploadCV
              handleChangePrev={handleChangePrev}
              handleChangeNextStep={handleChangeNextStep}
              changeForm={changeForm}
              job={form}
            />
          ),
          2: (
            <SuccesPost
              handleChangePrev={handleChangePrev}
              handleChangeNextStep={handleChangeNextStep}
              changeForm={changeForm}
              job={form}
            />
          ),
        }[step]
      }
    </Box>
  );
};

export default LayoutForm;
