import './App.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import FormControl from '@mui/material/FormControl';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

function App() {
 
  return (
    <div className="App">
      <div class= "apua">
      <TextareaAutosize minRows={4} variant="outlined" helperText = "kerro ongelmasta" />
</div>

<RadioGroup
        row 
      >
        <FormControlLabel value="kirjasto1" control={<Radio />} label="kirjasto1" />
        <FormControlLabel value="kirjasto2" control={<Radio />} label="kirjasto2" />
        <FormControlLabel value="kirjasto3" control={<Radio />} label="kirjasto3" />
      </RadioGroup>
    </div>
  );
}

export default App;