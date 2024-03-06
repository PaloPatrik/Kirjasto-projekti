import './App.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  const [value, setValue] = React.useState(0)
  if (value === 1) {
    return (
      <div>
        
        <Stack spacing={5} direction = "row">
        <Button variant="contained" onClick={() => setValue(0)}>Kirjaudu</Button>
        <Button variant="outlined" onClick={() => setValue(1)}>Rekisteröidy</Button>
        </Stack>
        
        <Stack spacing={3} direction="column" id="rekisteroidy-kentta">
          <TextField variant='outlined' helperText='nimi'/>
          <TextField variant='outlined' helperText='gr tunnus'/>
          <TextField variant='outlined' helperText='salasana'/>
          <TextField variant='outlined' helperText='salasana uudelleen'/>
        </Stack>
        <Stack>
          <Button variant='contained'>Rekisteröidy</Button>
        </Stack>
      </div>
    )
  }
  else
  return (
    <div className="App">
      
      <Stack spacing={5} direction = "row">
        <Button variant="contained" onClick={() => setValue(0)}>Kirjaudu</Button>
        <Button variant="outlined" onClick={() => setValue(1)}>Rekisteröidy</Button>
      </Stack>
      
      <Stack spacing={3} direction = "column" id="kirjaudu-kentta">
        <TextField variant="outlined" helperText = "gr tunnus" />
        <TextField variant="outlined" helperText = "salasana" />
      </Stack>
  <Stack spacing={5}>
    <Button variant="contained">Kirjaudu</Button>
  </Stack>
    </div>
  );
}

export default App;