import React from 'react';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import './Add.css';

function Add(props) {
  return (
    
    <form>
      
        <div class= "centeri">
        
        <Typography variant="h6" gutterbottom className = "tekstit">
          Missä kirjastolla olit töissä
        </Typography>
       
        <RadioGroup row name="kirjasto" className="RadioGroup">
          <FormControlLabel value="kirjasto1" control={<Radio />} label="Kirjasto1"/> 
          <FormControlLabel value="kirjasto2" control={<Radio />} label="Kirjasto2"/>
          <FormControlLabel value="kirjasto3" control={<Radio />} label="Kirjasto3"/>
        </RadioGroup>
        <div className= "tekstit">
          <Typography variant="h6" gutterBottom>
            Missä oli vika
          </Typography>
        </div>
        <RadioGroup row name="laite" className="RadioGroup"
        //radiogroup missä oli vika
        >
          <FormControlLabel value="Tietokone" control={<Radio />} label="Tietokone"/>
          <FormControlLabel value="Puhelin" control={<Radio />} label="Puhelin"/>
          <FormControlLabel value="Pankkitili" control={<Radio />} label="Pankkitili"/>
          <FormControlLabel value="Tabletti" control={<Radio />} label="Tabletti"/>
          <FormControlLabel value="Muu" control={<Radio />} label="Muu"/>
          </RadioGroup>
     
        <TextField 
          className="teksti" //classnimi = css tiedoston tyyli
          multiline 
          rows={4} //alku rivit
          placeholder="Lisätietoja" //placeholder = mitä näkyy ennenkuin tekstiä on laitettu
          variant="outlined" // outlinattu
          fullWidth //koko alueen vie 
        />
        <Stack className='rivi' spacing={1} direction='row'>
        <Button variant="contained">Lähetä</Button>
        <Button variant="contained" onClick={() => props.setValue(2)}>Takaisin</Button>
        </Stack>
        </div>
   </form>
    
  ); 
}

export default Add;