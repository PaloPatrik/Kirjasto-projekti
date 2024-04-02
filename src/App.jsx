import React from 'react';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import header from './kirjastocut.png';
import './App.css';

function App() {
  return (
    <div>
      <header> 
        <img src={header} alt="header" />
      </header>
      <div className="FormContainer">
        <Typography variant="h4" gutterBottom>
          Missä kirjastolla olit töissä
        </Typography>
        <RadioGroup row name="kirjasto" className="radio-group">
          <FormControlLabel value="kirjasto1" control={<Radio />} label="Kirjasto1"/>
          <FormControlLabel value="kirjasto2" control={<Radio />} label="Kirjasto2"/>
          <FormControlLabel value="kirjasto3" control={<Radio />} label="Kirjasto3"/>
        </RadioGroup>
        <Typography variant="h4" gutterBottom>
          Missä oli vika
        </Typography>
        <RadioGroup row name="laite" className="radio-group">
          <FormControlLabel value="Tietokone" control={<Radio />} label="Tietokone"/>
          <FormControlLabel value="Puhelin" control={<Radio />} label="Puhelin"/>
          <FormControlLabel value="Mikroaaltouuni" control={<Radio />} label="Mikroaaltouuni"/>
          <FormControlLabel value="Pankkitili" control={<Radio />} label="Pankkitili"/>
          <FormControlLabel value="Tabletti" control={<Radio />} label="Tabletti"/>
          <FormControlLabel value="Muu" control={<Radio />} label="Muu"/>
        </RadioGroup>
        <TextField 
          className="teksti"
          multiline
          rows={4}
          placeholder="Lisätietoja"
          variant="outlined"
          fullWidth
          
        />
        <Button variant="contained" className="Buttoni">
          Lähetä
        </Button>
      </div>
    </div>
  ); 
}

export default App;