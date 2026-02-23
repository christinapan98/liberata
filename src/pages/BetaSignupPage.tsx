import React, {useState} from 'react';
import Header from '../components/Header';
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "./BetaSignupPage.css";
import { time } from 'console';

function BetaSignupPage() {
  const [fNameInputValue, setFNameInputValue] = useState("");
  const [lNameInputValue, setLNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [institutionInputValue, setInstitutionInputValue] = useState("");
  const [orcidInputValue, setOrcidInputValue] = useState("");
  const [disciplineInputValue, setDisciplineInputValue] = useState("");
  const [timeframeInputValue, setTimeframeInputValue] = useState("");
  const [openAccessChallengesInputValue, setOpenAccessChallengesInputValue] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isSuccessVisible, setSuccessVisible] = useState(false);
  const [isErrorVisible, setErrorVisible] = useState(false);

  const googleSheetApiUrl = "https://script.google.com/macros/s/AKfycbxchrd6z0S5m9iTjppPeIlwyGuiSoH4UqqoUe6c0uwkBU09BaHbOVOs82Qc1TWVC0QL/exec";

  const handleBetaSignupFormSubmit = (e: any) => {
    e.preventDefault();
    
    setLoading(true);
    const formData = new FormData();
    formData.append("Email", emailInputValue);
    formData.append("First name", fNameInputValue);
    formData.append("Last name", lNameInputValue);
    formData.append("Institution", institutionInputValue);
    formData.append("Academic discipline", disciplineInputValue);
    formData.append("ORCID", orcidInputValue);
    formData.append("Timeframe for next publication", timeframeInputValue);
    formData.append("OA challenges message", openAccessChallengesInputValue);

    // Push the contact form data to a google sheet
    fetch(googleSheetApiUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSuccessVisible(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
        setErrorVisible(true);
        setLoading(false);
      });
    setEmailInputValue("");
    setFNameInputValue("");
    setLNameInputValue("");
    setInstitutionInputValue("");
    setOrcidInputValue("");
    setDisciplineInputValue("");
    setTimeframeInputValue("");
    setOpenAccessChallengesInputValue("");
  }

  return (
    <>
      <Header/>
      <div className="BetaSignup-body">
        <div className="BetaSignup-message">
          <h3 style={{fontSize: '48px'}}>
            Join the future of open access academic publishing.
          </h3>
          <div style={{fontSize: '16px', lineHeight: '1.6'}}>
            Liberata is piloting a shares-based model for open access publishing to make research more transparent.
          </div>
        </div>
        
        <form className="BetaSignup-form" onSubmit={handleBetaSignupFormSubmit}>
          <div className="BetaSignup-basic">
            <h3>Basic information</h3>
            <TextField
              label="First name"
              required
              className="BetaSignup-input"
             
              value={fNameInputValue}
              onChange={(e) => setFNameInputValue(e.target.value)}
              // onBlur={() => validateFName(fNameInputValue)}
            />
            <TextField
              label="Last name"
              required
              className="BetaSignup-input"
             
              value={lNameInputValue}
              onChange={(e) => setLNameInputValue(e.target.value)}
              // onBlur={() => validateLName(lNameInputValue)}
            />

            <TextField
              label="Institutional Email"
              required
              className="BetaSignup-input"
             
              value={emailInputValue}
              onChange={(e) => setEmailInputValue(e.target.value)}
              // onBlur={() => validateEmail(emailInputValue)}
              // error={isEmailErrorVisible}
            />

            <TextField
              label="Institutional Affiliation"
              required
              className="BetaSignup-input"
              value={institutionInputValue}
              onChange={(e) => setInstitutionInputValue(e.target.value)}
              // onBlur={() => validateEmail(emailInputValue)}
              // error={isEmailErrorVisible}
            />

            <TextField
              label="Academic Discipline"
              required
              className="BetaSignup-input"
              value={disciplineInputValue}
              onChange={(e) => setDisciplineInputValue(e.target.value)}
              // onBlur={() => validateFName(fNameInputValue)}
            />
            <TextField
              label="ORCID ID"
              required
              className="BetaSignup-input"
              
              value={orcidInputValue}
              onChange={(e) => setOrcidInputValue(e.target.value)}
              // onBlur={() => validateLName(lNameInputValue)}
            />
          </div>
          
          <h3>More About You</h3>
          <div style={{marginBottom: '8px'}}> When do you anticipate you would next publish research?</div>
          <input
            type="number"
            value={timeframeInputValue}
            onChange={(e) => setTimeframeInputValue(e.target.value)}
            placeholder="Timeframe in months"
            style={{marginBottom: '16px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc'}}
          />
          {/* <div>Primary Research Area</div> */}
          <div style={{marginBottom: '8px'}}>What challenges have you faced with open-access publishing?</div>
          <TextField
            multiline
            rows={4}
            style={{width: "90%"}}
            value={openAccessChallengesInputValue}
            onChange={(e) => setOpenAccessChallengesInputValue(e.target.value)}
          />

          <input
            type="submit"
            value="Request Beta Access"
            className="outlined-submit is-visible"
            style={{width: 'fit-content', padding: '10px 20px', fontSize: '16px', marginTop: '24px', fontWeight: 'bold'}}
          />
        </form>
      </div>
    </>
  );
}

export default BetaSignupPage