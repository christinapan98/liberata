import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Footer from './Footer';
import { CircularProgress } from '@mui/material';
import './Contact.css';

function Contact() {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [fNameInputValue, setFNameInputValue] = useState("");
  const [lNameInputValue, setLNameInputValue] = useState("");
  const [institutionInputValue, setInstitutionInputValue] = useState("");
  const [messageInputValue, setMessageInputValue] = useState("");
  const [isSubmitVisible, setSubmitVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSuccessVisible, setSuccessVisible] = useState(false);
  const [isErrorVisible, setErrorVisible] = useState(false);

  const handleContactFormSubmit = (e: any) => {
    e.preventDefault();
    // perform regex checks
    if(!validateFirstName(fNameInputValue) || !validateLastName(lNameInputValue) || !validateEmail(emailInputValue)) {
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append('Email', emailInputValue);
    formData.append('First name', fNameInputValue);
    formData.append('Last name', lNameInputValue);
    formData.append('Institution', institutionInputValue);
    formData.append('Message', messageInputValue);

    fetch('https://script.google.com/macros/s/AKfycbxxxxcMbnh3e86tRLOqz57Fcw2LpLG14kVWVtuoqMClVNCLb8Ut0v1SpW4E3aetfzT9/exec', {
      method: 'POST',
      // figure out this formData section
      body: formData,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setSuccessVisible(true);
      setLoading(false);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      setErrorVisible(true);
      setLoading(false);
    });
    setEmailInputValue("");
    setFNameInputValue("");
    setLNameInputValue("");
    setInstitutionInputValue("");
    setMessageInputValue("");
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
          required
          value={fNameInputValue} 
          onChange={(e) => setFNameInputValue(e.target.value)} 
          onFocus={() => setSubmitVisible(true)}
          onBlur={() => validateFirstName(fNameInputValue)}/>
          <TextField 
          id="outlined-lname" 
          label="Last name" 
          required
          value={lNameInputValue} 
          onChange={(e) => setLNameInputValue(e.target.value)} 
          onFocus={() => setSubmitVisible(true)}
          onBlur={() => validateLastName(lNameInputValue)}/>
        </div>
        
        <div style={{marginBottom: '13px'}}>
          <TextField 
          id="outlined-email" 
          label="Email" 
          required
          sx={{maxWidth: '455px'}}
          value={emailInputValue} 
          onChange={(e) => setEmailInputValue(e.target.value)} 
          onFocus={() => setSubmitVisible(true)}
          onBlur={() => validateEmail(emailInputValue)}/>
        </div>
       
        <div style={{marginBottom: '13px'}}>
          <TextField 
          id="outlined-institution" 
          label="Institution" 
          sx={{maxWidth: '455px'}}
          value={institutionInputValue} 
          onChange={(e) => setInstitutionInputValue(e.target.value)} 
          onFocus={() => setSubmitVisible(true)}
          onBlur={() => validateEmail(emailInputValue)}/>
        </div>
        
        <TextField 
        id="outlined-message" 
        label="Message" 
        sx={{maxWidth: '455px', marginBottom: '27px'}}
        value={messageInputValue} 
        onChange={(e) => setMessageInputValue(e.target.value)} 
        onFocus={() => setSubmitVisible(true)}
        onBlur={() => validateEmail(emailInputValue)}/>


        {isLoading && <CircularProgress/>}
        {!isLoading && !isSuccessVisible &&
          <input type="submit" value="Submit" className={`outlined-submit ${isSubmitVisible && 'is-visible'}`}/>
        }

        {isSuccessVisible &&
          <div>Thank you! We'll be in touch regarding future updates.</div>
        }

        {isErrorVisible &&
          <div>There was an error submitting your information, please try again.</div>
        }
      </form>
    </div>
  );
}

export default Contact;