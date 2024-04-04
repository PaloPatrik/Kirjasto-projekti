import * as React from 'react';
import './Content.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

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
            <Stack>
            <Stack className='personProb' direction='row' spacing={15}>
                <Typography>Henkilö:</Typography>
                <Typography>Päivämäärä:</Typography>
            </Stack>

            <Stack className='personProb2' direction='row' spacing={16.5}>
                <Typography>Päivämäärä:</Typography>
                <Typography>Tiedot:</Typography>
            </Stack>
            </Stack>
        </div>
        </>
    )
}

export default Content;