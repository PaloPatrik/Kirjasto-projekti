import './App.css';
import React from 'react';
import header from './kirjastocut.png';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';



function App() {
  return (
    <div>
      <header style={{ textAlign: 'center' }}>
  <img src={header} alt="header" style={{ width: '100%' }} />
</header>


      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50vh', 
          overflow: 'hidden',
        }}
      >
        

        <RadioGroup row name="kirjasto" style={{ marginBottom: '20px' }}>
          <FormControlLabel value="kirjasto1" control={<Radio />} label="kirjasto1" />
          <FormControlLabel value="kirjasto2" control={<Radio />} label="kirjasto2" />
          <FormControlLabel value="kirjasto3" control={<Radio />} label="kirjasto3" />
        </RadioGroup>

        <TextareaAutosize
          minRows={4}
          placeholder="Kerro ongelmasta"
          style={{ width: '300px', maxWidth: '100%', marginTop: '10px', marginBottom: '20px'}}
        />
        <Button variant="contained"
        style={{marginTop: '20px'}}
        >Lähetä</Button>
      </div>
    </div>
  );
}

export default App;