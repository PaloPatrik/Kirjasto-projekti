import './App.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';

function App() {
  const [value, setValue] = React.useState(0)
  return (
    <div className="App">
      <Tabs value={value}>
      <Stack spacing={5} direction = "row">
        <Button variant="contained" onClick={() => setValue(0)}>Kirjaudu</Button>
        <Button variant="outlined" onClick={() => setValue(1)}>Rekisteröidy</Button>
      </Stack>
      </Tabs>
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