import * as React from 'react';
import './Content.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

// Ohjelma ottaa parametreihin vastaan valuen ja setvaluen
const Content = (props) => {
    return ( // Div Content sivun ylänapeille ja tiedot, jotka näkyvät sivun keskellä
        <>
        <div className='Contents'>
            <Stack className='addSearch' spacing={1} direction='row'>
                <Button variant='contained'>Hae</Button>
                <Button variant='contained' onClick={() => props.setValue(3)}>Lisää</Button>
                <Button variant='contained' onClick={() => props.setValue(0)}>Ulos</Button>
            </Stack>
        </div>

        <div className='Information'> 
            <Stack className='TiedotTausta'> 
            <Stack className='personProb' direction='column' spacing={3}>
                <Typography>Henkilö:</Typography>
                <Typography>Päivämäärä:</Typography>
                <Typography>Ongelma:</Typography>
                <Typography>Tiedot:</Typography>
                <TextField
                    multiline
                    rows={4}
                    className='Lisatiedot'
                    disabled
                />
            </Stack>
            </Stack>
        </div>
        </>
    )
}

export default Content;