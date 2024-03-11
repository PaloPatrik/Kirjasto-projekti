import './App.css';
import React from 'react';
import header from './kirjastocut.png';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



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

        <RadioGroup row name="laite" style={{ marginBottom: '20px' }}>
          <FormControlLabel value="Tietokone" control={<Radio />} label="Tietokone" />
          <FormControlLabel value="Puhelin" control={<Radio />} label="Puhelin" />
          <FormControlLabel value="Mikroaaltouuni" control={<Radio />} label="Mikroaaltouuni" />
          <FormControlLabel value="Pankkitili" control={<Radio />} label="Pankkitili" />
          <FormControlLabel value="Tabletti" control={<Radio />} label="Tabletti" />
          <FormControlLabel value="mikroaaltouun" control={<Radio />} label="mikroaaltouuni" />
        </RadioGroup>
    <TextField
      multiline
      rows={4}
      placeholder="Kerro paikastasi"
      variant="outlined"
      fullWidth
      />
        <Button variant="contained"
        style={{marginTop: '20px'}}
        >Lähetä</Button>
      </div>
    </div>
  );
}

export default App;