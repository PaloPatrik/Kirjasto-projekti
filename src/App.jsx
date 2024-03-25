import './App.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// Funktio kirjautumissivulle
// Funktio toimii if lauseen voimin, ja katsoo oikean 'staten' ja piirtää sille määritellyn näkymän
function App() {
  const [value, setValue] = React.useState(0)
  if (value === 1) {
    return (
      <div className='App'>
        <Stack spacing={5} direction = "row" className='logregbuttons'>
        <Button variant="outlined" onClick={() => setValue(0)} className='logreg'>Kirjaudu</Button>
        <Button variant="contained" onClick={() => setValue(1)} className='logreg'>Rekisteröidy</Button>
        </Stack>
        
        <Stack spacing={3} direction="column" id="rekisteroidy-kentta">
          <TextField variant='outlined' className='rekisteroidykentat' label='Nimi' />
          <TextField variant='outlined' className='rekisteroidykentat' label='Gr tunnus' />
          <TextField variant='outlined' type='password' className='rekisteroidykentat' label='Salasana' />
          <TextField variant='outlined' type='password' className='rekisteroidykentat' label='Salasana uudelleen' />
        </Stack>

        <Stack className='vati'>
          <Button variant='contained'>Rekisteröidy</Button>
        </Stack>
      </div>
    )
  }
  else
  return (
    <div className="App">
      <Stack spacing={5} direction = "row" className='logregbuttons'>
        <Button variant="contained" onClick={() => setValue(0)} className='logreg'>Kirjaudu</Button>
        <Button variant="outlined" onClick={() => setValue(1)} className='logreg'>Rekisteröidy</Button>
      </Stack>
      
      <Stack spacing={3} direction = "column" id="kirjaudu-kentta">
        <TextField variant="outlined" className='kirjaudukentat' label='Gr tunnus' />
        <TextField variant="outlined" type='password' className='kirjaudukentat' label='Salasana' />
      </Stack>

  <Stack spacing={5} className='vati'>
    <Button variant="contained">Kirjaudu</Button>
  </Stack>
    </div>
  );
}

export default App;