import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="App">
      <Stack spacing={5} direction = "row">
        <Button variant="contained">Kirjaudu</Button>
        <Button variant="outlined">Rekisteröidy</Button>
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
