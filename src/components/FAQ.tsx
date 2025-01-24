import React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import '@fontsource/inter';
import './FAQ.css';

function FAQ() {
  return (
    <div>
      <div className="FAQ-header">Frequently Asked Questions</div>

      <AccordionGroup sx={{marginTop: '30px', maxWidth: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
        <Accordion sx={{padding: '8px'}}>
          <AccordionSummary>First accordion</AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{padding: '8px'}}>
          <AccordionSummary>Second accordion</AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{padding: '8px'}}>
          <AccordionSummary>Third accordion</AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{padding: '8px'}}>
          <AccordionSummary>Fourth accordion</AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{padding: '8px'}}>
          <AccordionSummary>Fifth accordion</AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{padding: '8px'}}>
          <AccordionSummary>Sixth accordion</AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{padding: '8px'}}>
          <AccordionSummary>Seventh accordion</AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{padding: '8px'}}>
          <AccordionSummary>Eighth accordion</AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
        <Accordion  sx={{padding: '8px'}}>
          <AccordionSummary>Ninth accordion</AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>


    </div>
  )
}

export default FAQ