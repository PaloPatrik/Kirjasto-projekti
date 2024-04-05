import * as React from 'react';
import './Content.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Content = () => {
    return (
        <>
        <div className='Contents'>
            <Stack className='addSearch' spacing={1} direction='row'>
                <Button variant='contained' style={{color: 'black', backgroundColor: 'gray'}}>Hae</Button>
                <Button variant='contained' style={{color: 'black', backgroundColor: 'gray'}}>Lisää</Button>
                <Button variant='contained' style={{color: 'black', backgroundColor: 'gray'}}>Ulos</Button>
            </Stack>
        </div>

        <div className='Information'>
            <Stack className='pidor'>
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