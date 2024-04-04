import * as React from 'react';
import './Content.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Content = () => {
    return (
        <div className='Contents'>
        <Stack className='addSearch' spacing={1} direction='row'>
        <Button variant='contained'>Hae</Button>
        <Button variant='contained'>Lisää</Button>
        </Stack>
        </div>
    )
}

export default Content;