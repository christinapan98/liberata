import React, {useState} from 'react';
import './Contact.css';
import TextField from '@mui/material/TextField';

function Contact() {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [fNameInputValue, setFNameInputValue] = useState("");
  const [lNameInputValue, setLNameInputValue] = useState("");
  const [isSubmitVisible, setSubmitVisible] = useState(false);

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    alert("you've submitted the form");
    // perform regex checks
    if(!validateFirstName(fNameInputValue) || !validateLastName(lNameInputValue) || !validateEmail(emailInputValue)) {
      return;
    }
    setEmailInputValue("");
    setFNameInputValue("");
    setLNameInputValue("");
  }

  const validateFirstName = (input : string) => {
    console.log("validating fname ", input);
    return true;
  }

  const validateLastName = (input : string) => {
    console.log("validating lname ", input);
    return true;
  }

  const validateEmail = (input : string) => {
    console.log("validating email ", input);
    return true;
  }

  return (
    <div className="Contact-body">
      <div className="Contact-text">
        <div className="Contact-text-headline">
          Let's build a better system <span style={{color: 'var(--accent-blue)'}}>together</span>.
        </div>
        <div className="Contact-text-subline">
          Join our mailing list for future updates.
        </div>
      </div>
      <form className="Contact-form" onSubmit={handleContactFormSubmit}>
        <div style={{display: 'flex', flexDirection: 'row', marginBottom: '13px', gap: '13px'}}>
          <TextField
          id="outlined-fname" 
          label="First name" 
          value={fNameInputValue} 
          onChange={(e) => setFNameInputValue(e.target.value)} 
          onFocus={() => setSubmitVisible(true)}
          onBlur={() => validateFirstName(fNameInputValue)}/>
          <TextField 
          id="outlined-lname" 
          label="Last name" 
          value={lNameInputValue} 
          onChange={(e) => setLNameInputValue(e.target.value)} 
          onFocus={() => setSubmitVisible(true)}
          onBlur={() => validateLastName(lNameInputValue)}/>
        </div>
        
        <TextField 
        id="outlined-email" 
        label="Email" 
        sx={{maxWidth: '455px'}}
        value={emailInputValue} 
        onChange={(e) => setEmailInputValue(e.target.value)} 
        onFocus={() => setSubmitVisible(true)}
        onBlur={() => validateEmail(emailInputValue)}/>

        <input type="submit" value="Submit" className={`outlined-submit ${isSubmitVisible && 'is-visible'}`}/>
      </form>
    </div>
  );
}

export default Contact;